import Player from './Player';
import Tile from './Tile';
import {EventEmitter} from 'eventemitter3';

export default class Game extends EventEmitter {
  constructor(dims) {
    super();

    this.generateBoard(dims);

    this._players = [];
    this.reset();
  }

  generateBoard (dims) {
    const a = []
    this._board = Array.apply(null, Array(dims)).map(function(){
      return Array.apply(null, Array(dims)).map(function(){
        return new Tile();
      });
    });

    //generate winningPatterns:
    const rows = Array.apply(null, Array(dims)).map(function(a,i){
      return Array.apply(null, Array(dims)).map(function(aa,ii){
        return [i,ii];
      });
    });

    const columns = Array.apply(null, Array(dims)).map(function(a,i){
      return Array.apply(null, Array(dims)).map(function(aa,ii){
        return [ii,i];
      });
    });

    const diagonal1 = Array.apply(null, Array(dims)).map(function(aa,ii){
      return [ii,ii];
    });

    const diagonal2 = Array.apply(null, Array(dims)).map(function(aa,ii){
      return [ii,dims - 1 - ii];
    });

    this._winningPatterns = [
      ...rows,
      ...columns,
      ...[diagonal1],
      ...[diagonal2]
    ];
  }

  reset (dims) {
    dims = dims || 3;
    this.playerInTurn = null;
    this.generateBoard(dims);
    this.emit('game started');
  }

  newTurn () {
    if (this.playerInTurn === this.getPlayer(1)) {
      this.playerInTurn = this.getPlayer(2);
    } else {
      this.playerInTurn = this.getPlayer(1);
    }

    this.emit('new turn started');
  }

  getBoard () {
    return this._board;
  }

  getTile(coordinates) {
    return this._board[coordinates[0]][coordinates[1]];
  }

  updateBoard (coordinates) {

    if (this._gameStarted) {
      this.getTile(coordinates).associatedTo = this.playerInTurn;
      let winner = null;
      if (this.hasCurrentPlayerWon()) {
        winner = this.playerInTurn;
        this._highScores.addPlayer(this.playerInTurn);
        const loser = (this.playerInTurn === this.getPlayer(1)) ? this.getPlayer(2) : this.getPlayer(1);
        this.stop(winner, loser, false);
      } else if (this.anyOpenTilesLeft()) {
        this.newTurn();
      } else {
        this.stop(null, null, true);
      }

      this.emit('board changed');
    }
  }

  hasCurrentPlayerWon () {
    let winningPattern = [];

    const winningPatternFound = this._winningPatterns.some(function (pattern) {
      const found = pattern.every(function(coordinates) {
        const tile = this.getTile(coordinates);
        if(!tile.associatedTo) {
          return false;
        }
        return (tile.associatedTo === this.playerInTurn);
      }, this);

      if(found) {
        winningPattern = pattern;
      }
      return found;
    }, this);
    if(winningPatternFound) {
      winningPattern.forEach(function(coordinates) {
        this.getTile(coordinates).winner = true;
      }, this);
    }

    return winningPatternFound;
  }

  anyOpenTilesLeft () {
    return this.getBoard().some(function (row) {
      return row.some(function(tile){
        return (!tile.associatedTo);
      });
    });
  }

  addPlayer(player) {
    if(player instanceof Player) {
      this._players.push(player);
      player.setId(this._players.indexOf(player) + 1);
    }
  }

  getPlayer (id) {
    if(!(id > this._players.length)) {
      return this._players[id - 1];
    }
  }

  addHighScores (highScores) {
    this._highScores = highScores;
  }

  start () {
    this.playerInTurn = this.getPlayer(1);
    this._gameStarted = true;
  }

  stop (winner, loser, gameIsTied) {
    this.emit('game stopped', {
      winner: winner,
      loser: loser,
      gameIsTied: gameIsTied,
    });
    this.playerInTurn = null;
    this._gameStarted = false;
  }
}

import Player from './Player';
import Tile from './Tile';
import {EventEmitter} from 'eventemitter3';

export default class Game extends EventEmitter {
  constructor() {
    super();

    this._players = [];
    this.playerInTurn = null;

    this._board = [
      [new Tile(), new Tile(), new Tile()],
      [new Tile(), new Tile(), new Tile()],
      [new Tile(), new Tile(), new Tile()],
    ]
  }

  newTurn () {
    if (this.playerInTurn === this.getPlayer(1)) {
      this.playerInTurn = this.getPlayer(2);
    } else {
      this.playerInTurn = this.getPlayer(1);
    }
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
    const winningPatterns = [
      // rows:
      [ [0,0],[0,1],[0,2] ],
      [ [1,0],[1,1],[1,2] ],
      [ [2,0],[2,1],[2,2] ],
      //columns:
      [ [0,0],[1,0],[2,0] ],
      [ [0,1],[1,1],[2,1] ],
      [ [0,2],[1,2],[2,2] ],
      // diagonals
      [ [0,0],[1,1],[2,2] ],
      [ [0,2],[1,1],[2,0] ],
    ];

    let winningPattern = [];

    const winningPatternFound = winningPatterns.some(function (pattern) {
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

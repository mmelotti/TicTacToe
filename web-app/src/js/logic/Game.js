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

    this.event = {
      stop:"game-stop",
      playerSwitched:"game-player-switched",
      playerHasWon: "game-player-has-won",
      nobodyHasWon: "game-nobody-has-won",
    };
  }

  newTurn () {
    if (this.playerInTurn === this.getPlayer(1)) {
      this.playerInTurn = this.getPlayer(2);
    } else {
      this.playerInTurn = this.getPlayer(1);
    }

    this.emit(this.event.playerSwitched);
  }

  getBoard () {
    return this._board;
  }
  getTile(coordinates) {
    return this._board[coordinates[0]][coordinates[1]];
  }

  updateBoard (coordinates) {

    this.getTile(coordinates).associatedTo = this.playerInTurn;

    if (this.hasCurrentPlayerWon()) {
      //this.recordScore(this.playerInTurn);
      this.emit(this.event.playerHasWon, {
        winner: this.playerInTurn
      });
      this.stop();
    } else if (this.anyOpenTilesLeft()) {
      this.newTurn();
    } else {
      this.emit(this.event.nobodyHasWon);
      this.stop();
    }
  }

  hasCurrentPlayerWon () {
    const winningPatterns = [
      // rows:
      [ [0,0],[0,1],[0,3] ],
      [ [1,0],[1,1],[1,3] ],
      [ [2,0],[2,1],[2,3] ],
      //columns:
      [ [0,0],[1,0],[2,0] ],
      [ [0,1],[1,1],[2,1] ],
      [ [0,2],[1,2],[2,2] ],
      // diagonals
      [ [0,0],[1,1],[2,2] ],
      [ [0,2],[1,1],[2,0] ],
    ];

    const self = this;
    const board = this.getBoard();
    let winningPattern = [];
    const found = winningPatterns.some(function (pattern) {
      var found = pattern.every(function(coordinates) {
        const tile = self.getTile(coordinates);
        return tile.associatedTo === self.playerInTurn;
      });
      if(found) {
        winningPattern = pattern;
      }
      return found;
    });

    winningPattern.forEach(function(coor) {
      this.getTile(coor).winner = true;
    }, this);
    console.log(this._board);

    return found;
  }

  anyOpenTilesLeft () {
    // check board
    return true;
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
  }

  stop () {
    this.playerInTurn = null;
    this.emit(this.event.stop);
  }
}

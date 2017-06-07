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

  updateBoard (coordinates) {

    this._board[coordinates[0]][coordinates[1]].associatedTo = this.playerInTurn;

    if (this.currentPlayerHasWon()) {

    } else if (this.anyOpenTilesLeft()) {
      this.newTurn();
    } else {
      this.recordScore(this.playerInTurn);
      this.stop();
    }
  }
  currentPlayerHasWon () {
    // check board
    const hasWon = false;
    return hasWon;
  }

  anyOpenTilesLeft () {
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

import Player from './Player';

export default class Game {
  constructor() {

    this._players = [];
    this.playerInTurn = null;
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
  }
}

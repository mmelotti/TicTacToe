export default class Player {
  constructor() {

    this.name = null;
    this.id = null;
  }

  getId () {
    return `player-${this.id}`;
  }

  setId (id) {
    this.id = id;
  }
}

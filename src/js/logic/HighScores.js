import Player from './Player';

export default class HighScores {
  constructor() {

    const maxScore = 500;
    this._maxHighScores = 10;
    this._newestScoreAdded = null;

    this._list = [1,1,1,1,1].map(function () {
      const player = new Player();
      player.points = parseInt(Math.random() * maxScore, 10);
      return player;
    }).sort(this.sorter);

    console.log
  }

  set list (list) {
    // dummy
  }

  get list () {
    return this._list;
  }

  set newestScoreAdded (newestScoreAdded) {
    // dummy
  }

  get newestScoreAdded () {
    return this._newestScoreAdded;
  }

  sorter (p1, p2) {
    return p1.points <= p2.points;
  }

  addPlayer (player) {
    if (player instanceof Player) {
      const clone = Object.assign(Object.create(player), player);
      this._list.push(clone);
      this._newestScoreAdded = clone;
      this._list.sort(this.sorter);
    } else {
      console.error(player, 'needs to be an instance of', Player);
    }
  }
}

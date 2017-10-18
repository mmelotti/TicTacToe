export default class Player {
  constructor() {

    this._name = null;
    this._avatar = null;
    this._dummyName = this._generateRandomName();
    this.id = null;
    this._points = 0;
  }

  getId () {
    return `player-${this.id}`;
  }

  setId (id) {
    this.id = id;
  }

  set name (name) {
    this._name = name;
  }

  get name () {
    return (this._name ? this._name : this._dummyName);
  }

  set avatar (avatar) {
    this._avatar = avatar;
  }

  get avatar () {
    return `img/avatars/${this._avatar}.svg`;
  }

  set points (points) {
    this._points = points;
  }

  get points () {
    return this._points;
  }

  _generateRandomName () {
    const names = [
    ["Runny", "Buttercup", "Dinky", "Stinky", "Crusty",
    "Greasy","Sun", "Cheesypoof", "Lumpy", "Wacky", "Tiny", "Flunky",
    "Fluffy", "Zippy", "Doofus", "Gobsmacked", "Slimy", "The Great", "Salamander",
    "Oily", "Burrito", "Bumpy", "Loopy", "Snotty", "Irving", "Egbert"],
    ["Waffer", "Lilly","Spooky","Sandy", "Fuzzy","Kitty",
     "Puppy", "Snuggles","Rubber", "Stinky", "Lulu", "Lola", "Sparkle", "Glitter",
     "Silver", "Golden", "Rainbow", "Cloud", "Rain", "Stormy", "Winky", "Sugar",
     "Twinkle", "Star", "Halo", "Angel"],
    ["Snicker", "Buffalo", "Gross", "Bubble", "Sheep",
     "Corset", "Toilet", "Lizard", "Waffle", "Kumquat", "Burger", "Grasshopper", "Liver",
     "Gorilla", "Rhino", "Emu", "Pizza", "Toad", "Gerbil", "Pickle", "Tofu",
    "Chicken", "Potato", "Mole-person", "Lemur", "Cumberbatch"]
  ];

    return [
      names[0][Math.floor(Math.random() * names[0].length)],
      // names[1][Math.floor(Math.random() * names[1].length)],
      names[2][Math.floor(Math.random() * names[2].length)],
    ].join(" ");
  }
}

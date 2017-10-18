import React from 'react';
import PageHeader from './organisms/PageHeader';
import PlayerSelection from './organisms/PlayerSelection';
import GamePlay from './organisms/GamePlay';
import HallOfFame from './organisms/HallOfFame';

import Player from './../logic/Player';
import Game from './../logic/Game';
import HighScores from './../logic/HighScores';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.onGameRequested = this.onGameRequested.bind(this);
    this.onHallOfFameRequested = this.onHallOfFameRequested.bind(this);

    const player1 = new Player();
    player1.avatar = 'fox';
    const player2 = new Player();
    player2.avatar = 'sheep';

    this._gameEngine = new Game(3);
    this._gameEngine.addPlayer(player1);
    this._gameEngine.addPlayer(player2);

    this._highScores = new HighScores();
    this._gameEngine.addHighScores(this._highScores);

    this.state = {
      currentView: <PlayerSelection
        submitCallback={this.onGameRequested}
        goToHallOfFame={this.onHallOfFameRequested}
        gameEngine={this._gameEngine}/>,
    };
  }

  onGameRequested (e) {
    this._gameEngine.reset();
    this._gameEngine.start();
    this.setState({
      currentView: <GamePlay
        gameWin={this.onHallOfFameRequested}
        gameEngine={this._gameEngine}/>
    });
  }

  onHallOfFameRequested () {
    this.setState({
      currentView: <HallOfFame
        replay={this.onGameRequested}
        highScores={this._highScores}/>
    });
  }

  render () {
    const props = this.props;
    const state = this.state;

    return (
      <div>
        <PageHeader AppName="Tic Tac Toe"/>
        <main>
          {state.currentView}
        </main>
      </div>
    );
  }
}

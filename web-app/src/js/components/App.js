import React from 'react';
import PageHeader from './organisms/PageHeader';
import PlayerSelection from './organisms/PlayerSelection';
import GamePlay from './organisms/GamePlay';
import HallOfFame from './organisms/HallOfFame';

import Player from './../logic/Player';
import Game from './../logic/Game';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.onGameRequested = this.onGameRequested.bind(this);
    this.onHallOfGameRequested = this.onHallOfGameRequested.bind(this);

    const player1 = new Player();
    player1.avatar = 'fox';
    const player2 = new Player();
    player2.avatar = 'sheep';

    this._gameEngine = new Game();
    this._gameEngine.addPlayer(player1);
    this._gameEngine.addPlayer(player2);
    this._gameEngine.start();

    this.state = {
      currentView: <PlayerSelection
        submitCallback={this.onGameRequested}
        goToHallOfFame={this.onHallOfGameRequested}
        gameEngine={this._gameEngine}/>,
    };
  }

  onGameRequested (e) {
    this.setState({
      currentView: <GamePlay
        gameWin={this.onHallOfGameRequested}
        gameEngine={this._gameEngine}/>
    });
  }

  onHallOfGameRequested () {
    this.setState({
      currentView: <HallOfFame
        replay={this.onGameRequested}
        gameEngine={this._gameEngine}/>
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

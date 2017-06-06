import React from 'react';
import PageHeader from './organisms/PageHeader';
import PlayerSelection from './organisms/PlayerSelection';
import GamePlay from './organisms/GamePlay';
import HallOfFame from './organisms/HallOfFame';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.onGameRequested = this.onGameRequested.bind(this);
    this.onHallOfGameRequested = this.onHallOfGameRequested.bind(this);

    this.state = {
      currentView: <PlayerSelection
        submitCallback={this.onGameRequested}
        goToHallOfFame={this.onHallOfGameRequested}/>
    };
  }

  onGameRequested (e) {
    this.setState({
      currentView: <GamePlay
        gameWin={this.onHallOfGameRequested}/>
    });
  }

  onHallOfGameRequested () {
    this.setState({
      currentView: <HallOfFame
        replay={this.onGameRequested} />
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

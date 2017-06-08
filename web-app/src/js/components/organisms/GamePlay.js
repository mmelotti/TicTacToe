import React from 'react';
import LabeledClickField from './../molecules/LabeledClickField';
import PerformanceIndicator from './../molecules/PerformanceIndicator';
import GameBoard from './../molecules/GameBoard';
import Button from './../atoms/Button';

export default class PlayerSelection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameEngine: props.gameEngine
    };

    // this.state.gameEngine.addListener('game-player-switched', this.gameHasUpdated);
    this.state.gameEngine.addListener('game stopped', this.gameHasStopped.bind(this), false);
    this.state.gameEngine.addListener('board changed', this.gameHasUpdated.bind(this), false);
  }

  gameHasUpdated (event) {
    this.setState({
      gameEngine: this.state.gameEngine,
      winner: event.winner,
    });
  }

  gameHasStopped (event) {
    this.setState({
      gameEngine: this.state.gameEngine,
      timeStopped: true,
    });
  }

  render () {
    const state = this.state;

    return (
      <section className="view game-play">
        <div className="turn-indicators">
          <PerformanceIndicator
            timeStopped={state.timeStopped}
            gameEngine={state.gameEngine}
            associatedTo={state.gameEngine.getPlayer(1)}/>
          <PerformanceIndicator
            timeStopped={state.timeStopped}
            gameEngine={state.gameEngine}
            associatedTo={state.gameEngine.getPlayer(2)}/>
        </div>
        <GameBoard gameEngine={state.gameEngine}/>
      </section>
    );
  }
}

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

    this.gameHasUpdated = this.gameHasUpdated.bind(this);
    this.state.gameEngine.addListener('game-player-switched', this.gameHasUpdated);
    this.state.gameEngine.addListener('game-player-has-won', this.gameHasUpdated);
  }

  gameHasUpdated () {
    this.setState({
      gameEngine: this.state.gameEngine
    });
  }

  render () {
    const state = this.state;

    return (
      <section className="view game-play">
        <div className="turn-indicators">
          <PerformanceIndicator gameEngine={state.gameEngine} associatedTo={state.gameEngine.getPlayer(1)}/>
          <PerformanceIndicator gameEngine={state.gameEngine} associatedTo={state.gameEngine.getPlayer(2)}/>
        </div>
        <GameBoard gameEngine={state.gameEngine}/>
      </section>
    );
  }
}

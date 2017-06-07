import React from 'react';
import LabeledClickField from './../molecules/LabeledClickField';
import PerformanceIndicator from './../molecules/PerformanceIndicator';
import GameBoard from './../molecules/GameBoard';
import Button from './../atoms/Button';

export default class PlayerSelection extends React.Component {
  constructor(props) {
    super(props);
    this._gameEngine = props.gameEngine;
    this.state = {};
  }

  render () {
    const props = this.props;
    const gameEngine = this._gameEngine;
    return (
      <section className="view game-play">
        <div className="turn-indicators">
          <PerformanceIndicator gameEngine={gameEngine} associatedTo={gameEngine.getPlayer(1)}/>
          <PerformanceIndicator gameEngine={gameEngine} associatedTo={gameEngine.getPlayer(2)}/>
        </div>
        <GameBoard/>
      </section>
    );
  }
}

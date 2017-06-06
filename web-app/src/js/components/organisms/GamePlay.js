import React from 'react';
import LabeledClickField from './../molecules/LabeledClickField';
import PerformanceIndicator from './../molecules/PerformanceIndicator';
import GameBoard from './../molecules/GameBoard';
import Button from './../atoms/Button';

export default class PlayerSelection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render () {
    const props = this.props;
    return (
      <section className="view game-play">
        <div className="turn-indicators">
          <PerformanceIndicator associatedTo="player-1"/>
          <PerformanceIndicator associatedTo="player-2"/>
        </div>
        <GameBoard/>
      </section>
    );
  }
}

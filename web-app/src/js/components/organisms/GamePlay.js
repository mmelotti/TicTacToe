import React from 'react';
import LabeledClickField from './../molecules/LabeledClickField';
import PerformanceIndicator from './../molecules/PerformanceIndicator';
import GameBoard from './../molecules/GameBoard';
import MessageBox from './../molecules/MessageBox';

export default class PlayerSelection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameEngine: props.gameEngine
    };

    // this.state.gameEngine.addListener('game-player-switched', this.gameHasUpdated);
    this.state.gameEngine.addListener('game stopped', this.gameHasStopped.bind(this), false);
    this.state.gameEngine.addListener('board changed', this.gameHasUpdated.bind(this), false);

    this.goToHallOfFame = this.goToHallOfFame.bind(this);
    this.playAgain = this.playAgain.bind(this);
  }

  gameHasUpdated (event) {
    this.setState({
      gameEngine: this.state.gameEngine,
    });
  }

  gameHasStopped (event) {
    this.setState({
      gameEngine: this.state.gameEngine,
      timeStopped: true,
      winner: event.winner,
      loser: event.loser,
      gameIsTied: event.gameIsTied,
    });
  }

  goToHallOfFame () {
    //
  }

  playAgain () {
    //
  }

  render () {
    const state = this.state;
    const self = this;
    console.log(state);
    const gameIsTied = (state.gameIsTied) ? (
      <MessageBox
        text="Nobody won, you could try again?"
        okLabel="play again"
        okCallback={self.playAgain}/>
    ) : '';

    let hasWinner = null;
    if(state.winner) {
      const text = `${state.winner.name} won! Ah, the sweet taste of victory. Also, ${state.loser.name} lost.`;
      hasWinner = (
        <MessageBox
          text={text}
          okCallback={self.goToHallOfFame}
          okLabel="Go to Hall of Fame"
          cancelCallback={self.goToHallOfFame}
          cancelLabel="play again"/>
      );
    }

    return (
      <section className="view game-play">

        {gameIsTied}
        {hasWinner}

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

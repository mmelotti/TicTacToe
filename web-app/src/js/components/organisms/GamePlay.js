import React from 'react';
import LabeledClickField from './../molecules/LabeledClickField';
import PerformanceIndicator from './../molecules/PerformanceIndicator';
import GameBoard from './../molecules/GameBoard';
import MessageBox from './../molecules/MessageBox';

export default class GamePlay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameEngine: props.gameEngine,
      gameWin: props.gameWin,
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
    const self = this;
    setTimeout(function (){

      self.setState({
        gameEngine: self.state.gameEngine,
        timeStopped: true,
        winner: event.winner,
        loser: event.loser,
        gameIsTied: event.gameIsTied,
      });
    }, 1000);
  }

  goToHallOfFame () {
    this.state.gameWin();
  }

  playAgain () {
    this.state.gameEngine.reset();
    this.state.gameEngine.start();
    this.setState({
      gameEngine: this.state.gameEngine,
      winner: null,
      loser: null,
      gameIsTied: null,
    });
  }

  render () {
    const state = this.state;
    const self = this;

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
          associatedTo={state.winner}
          cancelCallback={self.playAgain}
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

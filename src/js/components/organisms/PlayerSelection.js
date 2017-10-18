import React from 'react';
import LabeledClickField from './../molecules/LabeledClickField';
import Button from './../atoms/Button';

export default class PlayerSelection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submitCallback: props.submitCallback,
      goToHallOfFame: props.goToHallOfFame,
      gameEngine: props.gameEngine,
    };

    this.startGame = this.startGame.bind(this);
  }

  startGame () {
    this.state.submitCallback();
  }

  render () {
    const state = this.state;
    const startGame = this.startGame;

    return (
      <section className="view player-selection">

        <h1>Which player do you want to play with?</h1>
        <form>
          <LabeledClickField
            labelText="Play as"
            buttonText=""
            placeholder="Enter your name..."
            associatedTo={state.gameEngine.getPlayer(1)}
          />
          <LabeledClickField
            labelText="or"
            buttonText=""
            placeholder="Enter your name..."
            associatedTo={state.gameEngine.getPlayer(2)}
          />
          <div className="button-bar">
            <Button
              label="Start playing!"
              type="submit"
              isCTA={true}
              clickCallback={startGame}/>
            <Button
              label="Hall of Fame"
              type="button"
              clickCallback={state.goToHallOfFame}/>
          </div>
        </form>
      </section>
    );
  }
}

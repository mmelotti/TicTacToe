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

    this.savePlayersAndStart = this.savePlayersAndStart.bind(this);
  }

  savePlayersAndStart () {
    this.state.gameEngine.getPlayer(1).name = 'Karl';
    this.state.gameEngine.getPlayer(2).name = 'Steve';
    this.state.submitCallback();
  }

  render () {
    const state = this.state;
    const savePlayersAndStart = this.savePlayersAndStart;

    return (
      <section className="view player-selection">

        <h1>Which player do you want to play with?</h1>
        <form>
          <LabeledClickField
            labelText="Play as"
            buttonText="Player 1"
            placeholder="Enter your name..."
            associatedTo="player-1"
          />
          <LabeledClickField
            labelText="or"
            buttonText="Player 2"
            placeholder="Enter your name..."
            associatedTo="player-2"
          />
          <div className="button-bar">
            <Button
              label="Start playing!"
              type="submit"
              isCTA={true}
              clickCallback={savePlayersAndStart}/>
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

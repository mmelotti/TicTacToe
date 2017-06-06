import React from 'react';
import LabeledClickField from './../molecules/LabeledClickField';
import Button from './../atoms/Button';

export default class PlayerSelection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render () {
    const props = this.props;
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
          <Button
            label="Start playing!"
            type="submit"/>
        </form>
      </section>
    );
  }
}

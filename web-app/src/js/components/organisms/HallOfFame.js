import React from 'react';
import Button from './../atoms/Button';

export default class HallOfFame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      replay: props.replay,
      highScores: [
        {
          name: "Henk Paarsen",
          points: 345,
        },
        {
          name: "Henk Paarsen",
          points: 345,
        },
        {
          name: "Henk Paarsen",
          points: 345,
        },
        {
          name: "Henk Paarsen",
          points: 345,
        },
        {
          name: "Henk Paarsen",
          points: 345,
        },
        {}, {}, {}, {}, {},
      ]
    };
  }

  render () {
    const props = this.props;
    const state = this.state;

    const highScores = state.highScores.map((score,i) => (
      (score.name ? (<li key={i}>
        <span className="name">
          {score.name}
        </span>
        <em className="score">{score.points}</em>
      </li>):(<li key={i}></li>))
    ));

    return (
      <section className="view hall-of-fame">

        <h1>Hall of Fame</h1>

        <ol>
          {highScores}
        </ol>

        <Button
          label="Play again!"
          type="submit"
          clickCallback={state.replay}/>
      </section>
    );
  }
}

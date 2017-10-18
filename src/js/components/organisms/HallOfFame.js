import React from 'react';
import Button from './../atoms/Button';

export default class HallOfFame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      replay: props.replay,
      highScores: props.highScores,
    };
  }

  render () {
    const props = this.props;
    const state = this.state;

    const highScores = state.highScores.list.map((score,i) => (
      (score ? (<li key={i}
        className={state.highScores.newestScoreAdded === score ? 'newly-added' : ''}>
        <span className="name">
          {score.name}
        </span>
        <em className="score">{score.points}</em>
      </li>):(<li key={i}></li>))
    ));

    return (
      <section className="view hall-of-fame">
        <h1>Hall of Fame</h1>
        <p>
          <span className="name">
            <strong>Name</strong>
          </span>
          <em className="score">
            <strong>points</strong>
          </em>
        </p>
        <ol>
          {highScores}
        </ol>
        <Button
          label="Play again!"
          type="submit"
          isCTA={true}
          clickCallback={state.replay}/>
      </section>
    );
  }
}

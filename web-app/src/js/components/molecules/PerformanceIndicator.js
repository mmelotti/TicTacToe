import React from 'react';

export default class PerformanceIndicator extends React.Component {
  constructor(props) {
    super(props);

    this.ticker = null;
    this.initialRating = 5;
    this.initialTime = 1000;

    this.state = {
      associatedTo: props.associatedTo,
      playerInTurn: props.playerInTurn,
      remainingTime: this.initialTime, // in seconds
      rating: this.initialRating, // starting rate.
    };
  }

  updateRating () {
    this.setState({
      rating : Math.round(this.initialRating * (this.state.remainingTime / this.initialTime))
    });
  }

  updateTime () {
    this.setState({
      remainingTime: (this.state.remainingTime - 50)
    });

    if(this.state.remainingTime === 0) {
      this.stop();
    } else {
      this.updateRating();
    }
  }
  start () {
    this.ticker = setInterval(() => this.updateTime(), 1000);
  }

  stop () {
    clearInterval(this.ticker);
  }

  componentDidMount () {
    this.start();
  }

  render () {
    const props = this.props;
    const state = this.state;
    return (
      <figure className="performance-indicator" data-owned-by={props.playerInTurn}>
        <figcaption>Wiph van Winkle</figcaption>
        <table>
          <tbody>
            <tr>
              <th>Points</th>
              <th>Rating</th>
            </tr>
            <tr>
              <td>{state.remainingTime}</td>
              <td>{state.rating}</td>
            </tr>
          </tbody>
        </table>
      </figure>
    );
  }
}

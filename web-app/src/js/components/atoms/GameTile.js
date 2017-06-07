import React from 'react';

export default class GameTile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameEngine: props.gameEngine,
      associatedTo: props.associatedTo,
      changeHandler: props.changeHandler,
      coordinates: props.coordinates,
      id: "game-tile-" + Date.now(),
    }

    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler (event) {
    // prevents an infinite loop:
    if(!this.state.associatedTo) {
      this.state.changeHandler(this.state.coordinates);
    }
    return false;
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      associatedTo: nextProps.associatedTo,
    });
  }

  render () {
    const state = this.state;
    const self = this;
    return (
      <div className="game-tile"
        data-associated-to={state.associatedTo ? state.associatedTo.getId():''}>
        <input type="checkbox"
          id={state.id}
          checked={state.associatedTo?'checked':''}
          disabled={state.associatedTo?'disabled':''}
          onChange={self.changeHandler}
        ></input>
        <label htmlFor={state.id}>
        </label>
      </div>
    );
  }
}

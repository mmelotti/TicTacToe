import React from 'react';

export default class GameTile extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const props = this.props;
    return (
      <div className="game-tile" data-associated-to={props.associatedTo}>
        <input type="checkbox" checked={props.associatedTo?'checked':''}
          disabled={props.associatedTo?'disabled':''}></input>
        <label></label>
      </div>
    );
  }
}

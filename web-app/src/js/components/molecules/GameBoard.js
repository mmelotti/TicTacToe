import React from 'react';
import GameTile from '../atoms/GameTile';

export default class GameBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render () {
    const props = this.props;
    return (
      <div className="game-board" data-owned-by={props.playerInTurn}>
        <div>
          <GameTile associatedTo="player-1" playerInTurn={props.playerInTurn}/>
          <GameTile associatedTo="player-2" playerInTurn={props.playerInTurn}/>
          <GameTile />
        </div>
        <div>
          <GameTile />
          <GameTile />
          <GameTile />
        </div>
        <div>
          <GameTile />
          <GameTile />
          <GameTile />
        </div>
      </div>
    );
  }
}

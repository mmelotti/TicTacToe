import React from 'react';
import GameTile from '../atoms/GameTile';

export default class GameBoard extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      gameEngine: props.gameEngine,
    };

    this.tileClicked = this.tileClicked.bind(this);
  }

  tileClicked (coordinates) {
    this.state.gameEngine.updateBoard(coordinates);
  }

  render () {
    const state = this.state;
    const self = this;

    const boardTiles = state.gameEngine.getBoard().map((row, i) => (
      <div key={i}>
        {row.map((tile, ii) => (
          <GameTile key={ii}
            coordinates={[i,ii]}
            associatedTo={tile.associatedTo}
            gameEngine={state.gameEngine}
            changeHandler={self.tileClicked}
            winner={tile.winner}/>
        ))}
      </div>
    ));

    return (
      <div className="game-board" data-owned-by={state.gameEngine.playerInTurn}>
        {boardTiles}
      </div>
    );
  }
}

import React from 'react';

import Button from './atoms/Button';
import Field from './atoms/Field';
import Label from './atoms/Label';

export default class AllComponents extends React.Component {
  constructor() {
    super();

    this.state = {
      list :[
        (<Button label="Generic button"/>),
        (<Button label="player 1's button" associatedTo="player-1"/>),
        (<Button label="Player 2's button" associatedTo="player-2"/>),
        (<Field value=""/>),
        (<Field placeholder="player 1's field" associatedTo="player-1"/>),
        (<Field placeholder="Player 2's field" associatedTo="player-2"/>),
        (<Label text="This is a label" />),
      ]
    };
  }

  render () {
    const list = this.state.list;
    return (
      <ol className="all-components">
        {list.map((comp,i) => (
          <li key={i}>{comp}</li>
        ))}
      </ol>
    );
  }
}

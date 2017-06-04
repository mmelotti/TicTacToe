import React from 'react';

import Button from './atoms/Button';

export default class AllComponents extends React.Component {
  constructor() {
    super();

    this.state = {

      list :[
        (<Button label="Generic button"/>),
        (<Button label="player 1's button"/>),
        (<Button label="Player 2's button"/>),
      ]
    }
  }

  render () {
    const list = this.state.list;
    return (
      <ul>
        {list.map((comp,i) => (
          <li key={i}>{comp}</li>
        ))}
      </ul>
    );
  }
}

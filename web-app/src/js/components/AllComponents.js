import React from 'react';

import Button from './atoms/Button';

export default class AllComponents extends React.Component {
  constructor() {
    super();

    this.state = {

      list :[
        {
          'name': 'Button',
          'props': {
            'label': 'Generic button'
          }
        },
        {
          'name': 'Button',
          'props': {
            'label': 'player 1\'s button'
          }
        },
        {
          'name': 'Button',
          'props': {
            'label': 'Player 2\'s button'
          }
        }
      ]
    }
  }

  render () {
    const list = this.state.list;
    return (
      <ul>
        {list.map((comp,i) => (
          <li key={i}>
            <Button {...comp.props}/>
          </li>
        ))}
      </ul>
    );
  }
}

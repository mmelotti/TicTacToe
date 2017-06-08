import React from 'react';

import Button from './atoms/Button';
import Field from './atoms/Field';
import Label from './atoms/Label';
import LabeledClickField from './molecules/LabeledClickField';
import GameBoard from './molecules/GameBoard';
import PerformanceIndicator from './molecules/PerformanceIndicator';
import MessageBox from './molecules/MessageBox';

import Player from '../logic/Player';
import Game from '../logic/Game';

export default class AllComponents extends React.Component {
  constructor() {
    super();
    const player = new Player();
    player.setId(1);
    this.state = {
      list :[
        {
          'name': 'Atoms',
          'list':[
            // (<Button label="Generic button"/>),
            // (<Button label="player 1's button" associatedTo={player}/>),
            // (<Button label="Player 2's button" associatedTo={player}/>),
            // (<Field value=""/>),
            // (<Field placeholder="player 1's field" associatedTo={player}/>),
            // (<Field placeholder="Player 2's field" associatedTo={player}/>),
            // (<Label text="This is a label" />),
          ]
        },
        {
          'name': 'Molecules',
          'list':[
            // (<LabeledClickField
            //   labelText="This is a label"
            //   buttonText="Player 1"
            //   placeholder="Enter your name..."
            //   associatedTo={player}
            //  />),
             (<MessageBox
               text="A generic meaningless text that is just for testing the layout of this message box."
               okLabel="Go to Hall of Fame"
                cancelLabel="play again"/>),
          ]
        },
        {
          'name': 'Organisms',
          'list':[
            // (<GameBoard playerInTurn={player}/>),
            // (<PerformanceIndicator playerInTurn={player} associatedTo={player}/>),
          ]
        },
      ]
    };
  }

  render () {
    const list = this.state.list;
    console.log(list);
    const renderedList = (
      <section>
        {list.map((level, i) => (
          <article key={i}>
            <h2>{level.name}:</h2>
            <ol className="all-components">
              {level.list.map((comp,i) => (
                <li key={i}>{comp}</li>
              ))}
            </ol>
          </article>
          )
        )}
      </section>
    );
    return renderedList;
  }
}

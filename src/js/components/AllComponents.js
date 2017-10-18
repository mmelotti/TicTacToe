import React from 'react';

import Button from './atoms/Button';
import Field from './atoms/Field';
import Label from './atoms/Label';
import LabeledClickField from './molecules/LabeledClickField';
import GameBoard from './molecules/GameBoard';
import PerformanceIndicator from './molecules/PerformanceIndicator';
import MessageBox from './molecules/MessageBox';
import PageHeader from './organisms/PageHeader';

import Player from '../logic/Player';
import Game from '../logic/Game';

export default class AllComponents extends React.Component {
  constructor() {
    super();
    const player1 = new Player();
    player1.setId(1);
    player1.avatar = 'fox';

    const player2 = new Player();
    player2.setId(2);
    player2.avatar = 'sheep';

    const gameEngine = new Game();

    this.state = {
      list :[
        {
          'name': 'Atoms',
          'list':[
            (<Button label="Generic button"/>),
            (<Button label="player 1's button" associatedTo={player1}/>),
            (<Button label="Player 2's button" associatedTo={player2}/>),
            (<Field value=""/>),
            (<Field placeholder="player 1's field" associatedTo={player1}/>),
            (<Field placeholder="Player 2's field" associatedTo={player2}/>),
            (<Label text="This is a label" />),
          ]
        },
        {
          'name': 'Molecules',
          'list':[
            (<LabeledClickField
              labelText="This is a label"
              placeholder="Enter your name..."
              associatedTo={player1}
             />),
          ]
        },
        {
          'name': 'Organisms',
          'list':[
            (<GameBoard playerInTurn={player1} gameEngine={gameEngine}/>),
            (<PerformanceIndicator playerInTurn={player1} gameEngine={gameEngine} associatedTo={player1}/>),
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
    return (
      <div>

        <PageHeader AppName="Tic Tac Toe" subHeading="kitchen sink"/>
        <main>
          {renderedList}
        </main>
      </div>
    )
  }
}

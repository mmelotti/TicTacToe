import React from 'react';
import PageHeader from './organisms/PageHeader';
import PlayerSelection from './organisms/PlayerSelection';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render () {
    const props = this.props;
    return (
      <div>
        <PageHeader AppName="Tic Tac Toe"/>
        <main>
          <PlayerSelection />
        </main>
      </div>
    );
  }
}

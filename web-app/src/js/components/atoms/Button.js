import React from 'react';

export default class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      label: props.label
    };

  }

  render () {
    const state = this.state;
    return (
        <button type="button">{state.label}</button>
    );
  }
}

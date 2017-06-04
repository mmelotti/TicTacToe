import React from 'react';

export default class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      label: props.label,
      associatedTo: props.associatedTo,
    };

  }

  render () {
    const state = this.state;

    return (
        <button type="button" className={state.associatedTo}>{state.label}</button>
    );
  }
}

import React from 'react';

export default class Label extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: (props.text) ? props.text : "",
      for: (props.for) ? props.for : "",
      classNames: (props.classNames) ? props.classNames : "",
    };

  }

  render () {
    const state = this.state;

    return (
        <label
          className={state.classNames}
          htmlFor={state.for}
        >{state.text}:</label>
    );
  }
}

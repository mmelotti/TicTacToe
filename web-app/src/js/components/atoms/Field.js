import React from 'react';

export default class Field extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: (props.value) ? props.value : "",
      associatedTo: props.associatedTo,
      placeholder: (props.placeholder)? props.placeholder: "Type something..."
    };

  }

  render () {
    const state = this.state;
    const classNames = "field " + state.associatedTo;

    return (
        <input type="text"
          className={classNames}
          defaultValue={state.value}
          placeholder={state.placeholder}/>
    );
  }
}

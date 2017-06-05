import React from 'react';

export default class Field extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: (props.value) ? props.value : "",
      associatedTo: props.associatedTo,
      placeholder: (props.placeholder)? props.placeholder: "Type something...",
      id: props.id,
      focus: props.focus,
    };

  }

  componentDidUpdate () {
    if(this.props.focus) {
      this.nameInput.focus();
    }
  }

  render () {
    const state = this.state;
    const classNames = "field " + state.associatedTo;

    return (
        <input type="text"
          ref={(input) => { this.nameInput = input; }}
          id={state.id}
          className={classNames}
          defaultValue={state.value}
          placeholder={state.placeholder}/>
    );
  }
}

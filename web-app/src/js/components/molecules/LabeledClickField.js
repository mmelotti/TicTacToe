import React from 'react';
import Field from './../atoms/Field';
import Label from './../atoms/Label';
import Button from './../atoms/Button';

export default class LabeledClickField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      labelText: props.labelText,
      buttonText: props.buttonText,
      value: (props.value) ? props.value : "",
      associatedTo: props.associatedTo,
      placeholder: (props.placeholder)? props.placeholder: "Type something...",
      id: "ttt" + Date.now(),
      buttonCollapsed: false,
      fieldFocused: false,
    };

    this.toggleButton = this.toggleButton.bind(this);
    this.fieldChangeHandler = this.fieldChangeHandler.bind(this);
  }

  componentDidMount() {
  }

  toggleButton () {
    if(this.state.buttonCollapsed) {
      this.setState({
        buttonCollapsed: false,
        fieldFocused: false,
        buttonText: this.props.buttonText,
      });
    } else {
      this.setState({
        buttonCollapsed: true,
        fieldFocused: true,
        buttonText: this.props.buttonText,
      });
    }
  }

  getId () {
    return this.state.id;
  }

  getAssociation () {
    return this.state.associatedTo;
  }

  fieldChangeHandler (eventObj) {
    this.state.associatedTo.name = eventObj.target.value;
  }

  render () {
    const state = this.state;
    const self = this;
    const classNames = "labeled-click-field " + (state.buttonCollapsed ? 'collapsed': '');
    return (
      <div className={classNames}>
        <Label for={state.id}
          text={state.labelText}/>
        <Field id={state.id}
          value={state.value}
          focus={state.fieldFocused}
          placeholder={state.placeholder}
          associatedTo={state.associatedTo}
          onChangeHandler={self.fieldChangeHandler}/>
        <Button associatedTo={state.associatedTo}
          label={state.buttonText}
          clickCallback={this.toggleButton}
        />
      </div>
    );
  }
}

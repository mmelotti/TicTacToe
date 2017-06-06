import React from 'react';

export default class Button extends React.Component {
  constructor(props) {
    super(props);

    const validType = (props.type === 'submit' || props.type === 'button' || !props.type);

    if(!validType) {
      console.error('props.type did not a valid type, only submit and button are allowed. Defaults to button.');
    }
    
    this.state = {
      label: props.label,
      associatedTo: props.associatedTo,
      clickCallback: props.clickCallback,
      type: props.type,
    };

  }

  onSubmit (e) {
    e.preventDefault();
  }

  render () {
    const state = this.state;
    const props = this.props;
    const classNames = `${state.associatedTo} ${props.isCTA ? 'is-cta': ''}`;
    return (
        <button type={(!props.type) ? "button" : props.type}
          onClick={this.state.clickCallback}
          className={classNames}
          onSubmit={this.onSubmit}
        >{props.label}</button>
    );
  }
}

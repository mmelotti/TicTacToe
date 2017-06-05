import React from 'react';

export default class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      label: props.label,
      associatedTo: props.associatedTo,
      clickCallback: props.clickCallback,
    };

  }

  render () {
    const state = this.state;
    const props = this.props;

    return (
        <button type="button"
          onClick={this.state.clickCallback}
          className={state.associatedTo}>{props.label}</button>
    );
  }
}

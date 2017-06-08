import React from 'react';
import Button from './../atoms/Button';

export default class LabeledClickField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text,
      okLabel: props.okLabel,
      okCallback: props.okCallback,
      cancelLabel: props.cancelLabel,
      cancelCallback: props.cancelCallback,
    };
  }

  render () {
    const state = this.state;
    const self = this;
    return (
      <section className="message-box" role="popup">
        <p>{state.text}</p>

        <div className="button-bar">
          <Button
            isCTA={true}
            label={state.okLabel}
            clickCallback={state.okCallback}
          />
          <Button
            label={state.cancelLabel}
            clickCallback={state.cancelCallback}
          />
        </div>
      </section>
    );
  }
}

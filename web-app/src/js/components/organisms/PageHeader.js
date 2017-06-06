import React from 'react';

export default class PageHeader extends React.Component {

  render () {
    const props = this.props;
    let subHeading;
    if (props.subHeading) {
      subHeading = (<span class="sub-heading">props.subHeading</span>);
    }

    return (
      <header className="page-header">
        <h1>
          {props.AppName}
          {subHeading}
        </h1>
      </header>
    );
  }
}

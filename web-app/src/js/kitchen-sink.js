import React from 'react';
import ReactDOM from 'react-dom';
import AllComponents from './components/AllComponents';

document.addEventListener('DOMContentLoaded', () => {
  var body = document.getElementsByTagName('body')[0];
  console.log('test');
  ReactDOM.render(<AllComponents/>, body);
}, false);

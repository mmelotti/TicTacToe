import React from 'react';
import ReactDOM from 'react-dom';
import AllComponents from './components/AllComponents';

document.addEventListener('DOMContentLoaded', () => {
  var main = document.getElementsByTagName('main')[0];
  console.log('test');
  ReactDOM.render(<AllComponents/>, main);
}, false);

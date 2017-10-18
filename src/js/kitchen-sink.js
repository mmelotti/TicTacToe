import React from 'react';
import ReactDOM from 'react-dom';
import AllComponents from './components/AllComponents';

document.addEventListener('DOMContentLoaded', () => {
  var page = document.getElementById('page');
  ReactDOM.render(<AllComponents />, page);
}, false);

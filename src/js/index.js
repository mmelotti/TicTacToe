import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

document.addEventListener('DOMContentLoaded', () => {
  var page = document.getElementById('page');
  ReactDOM.render(<App/>, page);
}, false);

// importing from the react library from our node_modules folder
import React, { Component } from 'react';
// react dom is used to rendering it to the page
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// we will not be using much of service Worker
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // Component
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // we want all the component to be rendered in the div id root
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

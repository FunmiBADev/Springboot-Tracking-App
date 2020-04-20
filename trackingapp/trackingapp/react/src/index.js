import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import App from './App'; //this points to [react/src/app.js]
import Task from "./Task"


import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Task/>
  </React.StrictMode>, // [!]the tutorial(15:05) doesn't have this restrict mode, maybe delete if more roots need to be added
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

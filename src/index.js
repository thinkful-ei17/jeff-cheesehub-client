import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
// import App from './App';
import store from './store';
import CheeseList from './components/cheese-list';
import registerServiceWorker from './registerServiceWorker';

const cheeses = [
  "Bath Blue ",
  "Barkham Blue ",
  "Buxton Blue"
];

ReactDOM.render(
  <Provider store={store}>
  <CheeseList cheeses={cheeses} />
  </Provider>,
  , document.getElementById('root'));
registerServiceWorker();

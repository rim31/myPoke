import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import combineReducers from './reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
// import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

  const INITIAL_STATE = {
    // name:"oseng",
    // pokemons:[],
    // select:"pikachu"
  };

  const store = createStore(combineReducers, INITIAL_STATE);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

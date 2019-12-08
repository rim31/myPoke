import React, { Component } from 'react';
import './styles/App.css';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import nameReducer from '../reducers/nameReducer';
import getpokemonsReducer from '../reducers/getpokemonsReducer';
import counterReducer from '../reducers/counterReducer';
import selectorReducer from '../reducers/selectorReducer';
import displayReducer from '../reducers/displayReducer';
import Counter from '../actions/Counter';
import Name from '../actions/Name';
import Getpokemons from '../actions/Getpokemons';
import Selector from '../actions/Selector';
import Display from '../actions/Display';
import Details from '../actions/Details';


// ===== combine reducer =====
const rootReducer = combineReducers({
  counterReducer, 
  nameReducer,
  getpokemonsReducer,
  selectorReducer,
  displayReducer
});

// ========== STATE =========
  const INITIAL_STATE = {
    name:"oseng",
    pokemons:[],
    select:"pikachu", 
    id:0,
    data:[],
    favoris:[]
  };


// ============ createStore ============
const store = createStore(rootReducer, INITIAL_STATE);

  
class App extends Component {

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <nav>
            <Name />
          </nav>
          <div class="columns">
          <div class="column is-two-thirds">
              <Counter />
              <Selector pokemons={store.pokemons} page={store.count}  />
            </div>
            <div class="column auto">
              <Getpokemons />
              <div class="columns">
                <div class="column is-one-half">
                  <Display />
                  <Details   style={{position: "sticky", top:'0'}}/>
                </div>
              </div>
            </div>
          </div>
        </ Provider>

        
    </div>
    );
  }
}

export default App;


import React, { Component } from 'react';
import './styles/App.css';
import Grid from '../containers/Grid.jsners/Grid.js';
// import Button from '@material-ui/core/Button';
import {createStore, combineReducers} from 'redux';
import {Provider, useSelector, useDispatch} from 'react-redux';

// reducer changement de page
// function reducer(state, action) {// de base avec un seul reducer
function counterReducer(state = {count: 0}, action) {
  switch (action.type) {
    case "PLUS_COUNT":
      if (state.count < 49 ) {
        return {...state,
          count: state.count + 1
        }
      } else {
        return state;
      }
    case "MINUS_COUNT":
      if (state.count > 0 ) {
        return {...state,
          count: state.count - 1
        }
      } else {
        return state;
      }
    default:
      return state;
  }
};

// reducer changement de nom
function nameReducer(state = {name : ""}, action) {
    return state;
}

const rootReducer = combineReducers({
  counterReducer, 
  nameReducer
})

// ========== STATE =========
const INITIAL_STATE = {};
// const INITIAL_STATE = {
      // count   : 0, 
      // name    :'',
      // pokemons: [],
      // data    :[]
// };


// ============ createStore ============
// const store = createStore(reducer, INITIAL_STATE);
const store = createStore(rootReducer, INITIAL_STATE);

function Counter() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  //mapDispatch : useDispatch
  function plusCount() {
    dispatch({
      type : "PLUS_COUNT"
    })
  }

  function minusCount() {
    dispatch({
      type : "MINUS_COUNT"
    })
  }

  return (
    <div>
      <h2>Counter : {count}</h2>
       <button onClick={plusCount}>+</button>
       <button onClick={minusCount}>-</button>
    </div>
  ) ;
}

function Name() {

  function handleUpdateName() {

  }

  return (
    <div>
      <input placeholder='pokemon'onChange={handleUpdateName} />
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data          : [],//response fetch url
      page          : 0,// number of page
      allPokemons   : [],// array of pokemons according pages
    };
  }

  //964 pokemons en tout : 964 / 20 pour avoir le nombre de page
  componentDidMount() {
    var url = 'https://pokeapi.co/api/v2/pokemon/?limit=964';

    fetch(url)
    .then((Response)=>Response.json())
    .then((myResponse) => {
        this.setState({
        data:myResponse.results
        })
    })
    .then(() => 
      this.setState({allPokemons: this.state.data.slice(0, 20)})
    );
};  
// page suivante :  je crée un tableau avec le pokemon par série de 20
  handleNext() {
    let page = (this.state.page > 49 ? 49 : this.state.page + 1);
    this.setState({page: page})
    this.setState({allPokemons: this.state.data.slice(20 * (page), (20 * (page +1)))})
    // console.log(this.state.page);
  }
  // page précédente : création de tableau par tranche de 20
  handlePrev() {
    let page = (this.state.page < 1 ? 0 : this.state.page - 1);
    this.setState({allPokemons: this.state.data.slice(20 * (page), (20 * (page+1)))})
    this.setState({page: page})
    // console.log(this.state.allPokemons);
  }
  

  // button


  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Counter />
          <Name />
          <Grid pokemons={this.state.allPokemons} page={this.state.count}/>
        </ Provider>
    </div>
    );
  }
}

export default App;


import React, { Component } from 'react';
import './styles/App.css';
import Grid from './Grid.js';
// import Button from '@material-ui/core/Button';
import {createStore, combineReducers} from 'redux';
import {Provider, useSelector, useDispatch} from 'react-redux';

// reducer changement de page
// function reducer(state, action) {// de base avec un seul reducer
function counterReducer(state = {count : 0, pokemons :[],
data :  [{"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"},{"name":"ivysaur","url":"https://pokeapi.co/api/v2/pokemon/2/"},{"name":"venusaur","url":"https://pokeapi.co/api/v2/pokemon/3/"},{"name":"charmander","url":"https://pokeapi.co/api/v2/pokemon/4/"},{"name":"charmeleon","url":"https://pokeapi.co/api/v2/pokemon/5/"},{"name":"charizard","url":"https://pokeapi.co/api/v2/pokemon/6/"},{"name":"squirtle","url":"https://pokeapi.co/api/v2/pokemon/7/"},{"name":"wartortle","url":"https://pokeapi.co/api/v2/pokemon/8/"},{"name":"blastoise","url":"https://pokeapi.co/api/v2/pokemon/9/"},{"name":"caterpie","url":"https://pokeapi.co/api/v2/pokemon/10/"},{"name":"metapod","url":"https://pokeapi.co/api/v2/pokemon/11/"},{"name":"butterfree","url":"https://pokeapi.co/api/v2/pokemon/12/"},{"name":"weedle","url":"https://pokeapi.co/api/v2/pokemon/13/"},{"name":"kakuna","url":"https://pokeapi.co/api/v2/pokemon/14/"},{"name":"beedrill","url":"https://pokeapi.co/api/v2/pokemon/15/"},{"name":"pidgey","url":"https://pokeapi.co/api/v2/pokemon/16/"},{"name":"pidgeotto","url":"https://pokeapi.co/api/v2/pokemon/17/"},{"name":"pidgeot","url":"https://pokeapi.co/api/v2/pokemon/18/"},{"name":"rattata","url":"https://pokeapi.co/api/v2/pokemon/19/"},{"name":"raticate","url":"https://pokeapi.co/api/v2/pokemon/20/"},{"name":"spearow","url":"https://pokeapi.co/api/v2/pokemon/21/"},{"name":"fearow","url":"https://pokeapi.co/api/v2/pokemon/22/"},{"name":"ekans","url":"https://pokeapi.co/api/v2/pokemon/23/"},{"name":"arbok","url":"https://pokeapi.co/api/v2/pokemon/24/"},{"name":"pikachu","url":"https://pokeapi.co/api/v2/pokemon/25/"},{"name":"raichu","url":"https://pokeapi.co/api/v2/pokemon/26/"},{"name":"sandshrew","url":"https://pokeapi.co/api/v2/pokemon/27/"},{"name":"sandslash","url":"https://pokeapi.co/api/v2/pokemon/28/"},{"name":"nidoran-f","url":"https://pokeapi.co/api/v2/pokemon/29/"},{"name":"nidorina","url":"https://pokeapi.co/api/v2/pokemon/30/"},{"name":"nidoqueen","url":"https://pokeapi.co/api/v2/pokemon/31/"},{"name":"nidoran-m","url":"https://pokeapi.co/api/v2/pokemon/32/"},{"name":"nidorino","url":"https://pokeapi.co/api/v2/pokemon/33/"},{"name":"nidoking","url":"https://pokeapi.co/api/v2/pokemon/34/"},{"name":"clefairy","url":"https://pokeapi.co/api/v2/pokemon/35/"},{"name":"clefable","url":"https://pokeapi.co/api/v2/pokemon/36/"},{"name":"vulpix","url":"https://pokeapi.co/api/v2/pokemon/37/"},{"name":"ninetales","url":"https://pokeapi.co/api/v2/pokemon/38/"},{"name":"jigglypuff","url":"https://pokeapi.co/api/v2/pokemon/39/"},{"name":"wigglytuff","url":"https://pokeapi.co/api/v2/pokemon/40/"},{"name":"zubat","url":"https://pokeapi.co/api/v2/pokemon/41/"}]
}, action) {
  switch (action.type) {
    case "PLUS_COUNT":
      if (state.count < 49 ) {
        return {...state,
          count: state.count + 1, 
          pokemons : state.data.slice(20 * (state.count), (20 * (state.count +1)))
        }
      } else {
        return state;
      }
      case "MINUS_COUNT":
        if (state.count > 0 ) {
          return {...state,
            count: state.count - 1,
            pokemons : state.data.slice(20 * (state.count), (20 * (state.count +1)))
          }
      } else {
        return state;
      }
    default:
      return state;
  }
};

// reducer changement de nom
// function nameReducer(state, action) {
function nameReducer(state = {name : ""}, action) {
    switch (action.type) {
      case "UPDATE_NAME":
        return {
          ...state,
          name: action.payload
        };
    
      default:
        return state;
    }  
}

const rootReducer = combineReducers({
  counterReducer, 
  nameReducer
})

// ========== STATE =========
const INITIAL_STATE = {};
// const INITIAL_STATE = {
//       count   : 0, 
//       name    :'',
//       pokemons: [],
//       data: [{"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"},{"name":"ivysaur","url":"https://pokeapi.co/api/v2/pokemon/2/"},{"name":"venusaur","url":"https://pokeapi.co/api/v2/pokemon/3/"},{"name":"charmander","url":"https://pokeapi.co/api/v2/pokemon/4/"},{"name":"charmeleon","url":"https://pokeapi.co/api/v2/pokemon/5/"},{"name":"charizard","url":"https://pokeapi.co/api/v2/pokemon/6/"},{"name":"squirtle","url":"https://pokeapi.co/api/v2/pokemon/7/"},{"name":"wartortle","url":"https://pokeapi.co/api/v2/pokemon/8/"},{"name":"blastoise","url":"https://pokeapi.co/api/v2/pokemon/9/"},{"name":"caterpie","url":"https://pokeapi.co/api/v2/pokemon/10/"},{"name":"metapod","url":"https://pokeapi.co/api/v2/pokemon/11/"},{"name":"butterfree","url":"https://pokeapi.co/api/v2/pokemon/12/"},{"name":"weedle","url":"https://pokeapi.co/api/v2/pokemon/13/"},{"name":"kakuna","url":"https://pokeapi.co/api/v2/pokemon/14/"},{"name":"beedrill","url":"https://pokeapi.co/api/v2/pokemon/15/"},{"name":"pidgey","url":"https://pokeapi.co/api/v2/pokemon/16/"},{"name":"pidgeotto","url":"https://pokeapi.co/api/v2/pokemon/17/"},{"name":"pidgeot","url":"https://pokeapi.co/api/v2/pokemon/18/"},{"name":"rattata","url":"https://pokeapi.co/api/v2/pokemon/19/"},{"name":"raticate","url":"https://pokeapi.co/api/v2/pokemon/20/"},{"name":"spearow","url":"https://pokeapi.co/api/v2/pokemon/21/"},{"name":"fearow","url":"https://pokeapi.co/api/v2/pokemon/22/"},{"name":"ekans","url":"https://pokeapi.co/api/v2/pokemon/23/"},{"name":"arbok","url":"https://pokeapi.co/api/v2/pokemon/24/"},{"name":"pikachu","url":"https://pokeapi.co/api/v2/pokemon/25/"},{"name":"raichu","url":"https://pokeapi.co/api/v2/pokemon/26/"},{"name":"sandshrew","url":"https://pokeapi.co/api/v2/pokemon/27/"},{"name":"sandslash","url":"https://pokeapi.co/api/v2/pokemon/28/"},{"name":"nidoran-f","url":"https://pokeapi.co/api/v2/pokemon/29/"},{"name":"nidorina","url":"https://pokeapi.co/api/v2/pokemon/30/"},{"name":"nidoqueen","url":"https://pokeapi.co/api/v2/pokemon/31/"},{"name":"nidoran-m","url":"https://pokeapi.co/api/v2/pokemon/32/"},{"name":"nidorino","url":"https://pokeapi.co/api/v2/pokemon/33/"},{"name":"nidoking","url":"https://pokeapi.co/api/v2/pokemon/34/"},{"name":"clefairy","url":"https://pokeapi.co/api/v2/pokemon/35/"},{"name":"clefable","url":"https://pokeapi.co/api/v2/pokemon/36/"},{"name":"vulpix","url":"https://pokeapi.co/api/v2/pokemon/37/"},{"name":"ninetales","url":"https://pokeapi.co/api/v2/pokemon/38/"},{"name":"jigglypuff","url":"https://pokeapi.co/api/v2/pokemon/39/"},{"name":"wigglytuff","url":"https://pokeapi.co/api/v2/pokemon/40/"},{"name":"zubat","url":"https://pokeapi.co/api/v2/pokemon/41/"}]
// };


// ============ createStore ============
// const store = createStore(reducer, INITIAL_STATE);
const store = createStore(rootReducer, INITIAL_STATE);

function Counter() {
  // const count = useSelector(state => state.count);

  // HOOK insteat mapproptoState
  const {count, pokemons, name} = useSelector(state => ({
    ...state.counterReducer,
    ...state.nameReducer
  }));
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
       <h3>Name : {name}</h3>
       <Grid pokemons={pokemons} page={count} />
    </div>
  ) ;
}




function Name() {
  const dispatch = useDispatch();

  function handleUpdateName(event) {
      dispatch({
          type : "UPDATE_NAME", 
          payload: event.target.value
      })
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

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Counter />
          <Name />
        </ Provider>
    </div>
    );
  }
}

export default App;


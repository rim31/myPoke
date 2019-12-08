import React, { Component } from 'react';
import './styles/App.css';  
import Grid from './Grid.js';
import Button from '@material-ui/core/Button';
import {createStore} from 'redux';
import {Provider} from 'react-redux';


// reducer : update the state
function reducer(state, action) {
  return state;
};

const INITIAL_STATE = {
      counter: 0
};

const store = createStore(reducer, INITIAL_STATE);

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
  
  Counter() {
    return (
      <div>
        <h2>Counter</h2>
         <button>+</button>
         <button>-</button>
      </div>

    
  }

  render() {
    return (
      <div className="App">
        <Provider store={store}>
        <div>
          {/* je transmet en props la liste de pokemon et la page pour avoir les id parès */}
          {this.state.page > 0 ? <Button onClick={() => {this.handlePrev()}} variant="contained" color="primary">Précédent</Button> : null}
          {this.state.page < 49 ? <Button onClick={() => {this.handleNext()}} variant="contained" color="primary">Suivant</Button> : null}
          <div>page : {this.state.page}</div>
          <Grid pokemons={this.state.allPokemons} page={this.state.page}/>
        </div>
        </Provider>
      </div>
    );
  }
}

export default App;




// =========================================================================================================


import React, { Component, useEffect } from 'react';
import './styles/App.css';
import Grid from './Grid.js';
// import Button from '@material-ui/core/Button';
import {createStore, combineReducers} from 'redux';
import {Provider, useSelector, useDispatch} from 'react-redux';

// reducer changement de page
// function counterReducer(state = {count : 1}, action) {// de base avec un seul reducer
// function counterReducer(state = {count : 0, pokemons :[],
// data :  [{"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"},{"name":"ivysaur","url":"https://pokeapi.co/api/v2/pokemon/2/"},{"name":"venusaur","url":"https://pokeapi.co/api/v2/pokemon/3/"},{"name":"charmander","url":"https://pokeapi.co/api/v2/pokemon/4/"},{"name":"charmeleon","url":"https://pokeapi.co/api/v2/pokemon/5/"},{"name":"charizard","url":"https://pokeapi.co/api/v2/pokemon/6/"},{"name":"squirtle","url":"https://pokeapi.co/api/v2/pokemon/7/"},{"name":"wartortle","url":"https://pokeapi.co/api/v2/pokemon/8/"},{"name":"blastoise","url":"https://pokeapi.co/api/v2/pokemon/9/"},{"name":"caterpie","url":"https://pokeapi.co/api/v2/pokemon/10/"},{"name":"metapod","url":"https://pokeapi.co/api/v2/pokemon/11/"},{"name":"butterfree","url":"https://pokeapi.co/api/v2/pokemon/12/"},{"name":"weedle","url":"https://pokeapi.co/api/v2/pokemon/13/"},{"name":"kakuna","url":"https://pokeapi.co/api/v2/pokemon/14/"},{"name":"beedrill","url":"https://pokeapi.co/api/v2/pokemon/15/"},{"name":"pidgey","url":"https://pokeapi.co/api/v2/pokemon/16/"},{"name":"pidgeotto","url":"https://pokeapi.co/api/v2/pokemon/17/"},{"name":"pidgeot","url":"https://pokeapi.co/api/v2/pokemon/18/"},{"name":"rattata","url":"https://pokeapi.co/api/v2/pokemon/19/"},{"name":"raticate","url":"https://pokeapi.co/api/v2/pokemon/20/"},{"name":"spearow","url":"https://pokeapi.co/api/v2/pokemon/21/"},{"name":"fearow","url":"https://pokeapi.co/api/v2/pokemon/22/"},{"name":"ekans","url":"https://pokeapi.co/api/v2/pokemon/23/"},{"name":"arbok","url":"https://pokeapi.co/api/v2/pokemon/24/"},{"name":"pikachu","url":"https://pokeapi.co/api/v2/pokemon/25/"},{"name":"raichu","url":"https://pokeapi.co/api/v2/pokemon/26/"},{"name":"sandshrew","url":"https://pokeapi.co/api/v2/pokemon/27/"},{"name":"sandslash","url":"https://pokeapi.co/api/v2/pokemon/28/"},{"name":"nidoran-f","url":"https://pokeapi.co/api/v2/pokemon/29/"},{"name":"nidorina","url":"https://pokeapi.co/api/v2/pokemon/30/"},{"name":"nidoqueen","url":"https://pokeapi.co/api/v2/pokemon/31/"},{"name":"nidoran-m","url":"https://pokeapi.co/api/v2/pokemon/32/"},{"name":"nidorino","url":"https://pokeapi.co/api/v2/pokemon/33/"},{"name":"nidoking","url":"https://pokeapi.co/api/v2/pokemon/34/"},{"name":"clefairy","url":"https://pokeapi.co/api/v2/pokemon/35/"},{"name":"clefable","url":"https://pokeapi.co/api/v2/pokemon/36/"},{"name":"vulpix","url":"https://pokeapi.co/api/v2/pokemon/37/"},{"name":"ninetales","url":"https://pokeapi.co/api/v2/pokemon/38/"},{"name":"jigglypuff","url":"https://pokeapi.co/api/v2/pokemon/39/"},{"name":"wigglytuff","url":"https://pokeapi.co/api/v2/pokemon/40/"},{"name":"zubat","url":"https://pokeapi.co/api/v2/pokemon/41/"}]
// }, action) {
function counterReducer(state = {count : 1, pokemons:[], data:[]}, action) {// de base avec un seul reducer
  switch (action.type) {
    case "PLUS_COUNT":
      if (state.count < 49 ) {
        return {...state,
          count: state.count + 1, 
          // pokemons : state.data.slice(20 * (state.count), (20 * (state.count +1)))
        }
      } else {
        return state;
      }
      case "MINUS_COUNT":
        if (state.count > 0 ) {
          return {...state,
            count: state.count - 1,
            // pokemons : state.data.slice(20 * (state.count), (20 * (state.count +1)))
          }
      } else {
        return state;
      }
      case "GOTTA_CATCH_THEM_ALL":
          return {...state,
          pokemons : state.data.slice(20 * (state.count), (20 * (state.count +1)))
      }
    default:
      return state;
  }
};

// reducer changement de nom
function nameReducer(state = {name : ""}, action) {
// function nameReducer(state, action) {
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


function  initReducer(state = { pokemons:[], data:[]}, action)  {
  switch (action.type) {
    case "GET_ALL":
      return {
        ...state,
        name: action.payload
      };
    default:
      return state;
  }  
}

/*
** reducer chargement des pokemons à l'initialisation de la page
*/
function gottacatchthemallReducer(state = {data : [], pokemons:[]}, action) {
// function nameReducer(state, action) {
    switch (action.type) {
      case "GOTTA_CATCH_THEM_ALL":
        console.table("PAYLOAD data: "+action.payload);
        console.table("PAYLOAD pokemon: "+action.payload.pokemons);
        console.table("PAYLOAD pokemons: "+action.pokemons);
        return {
          ...state,
          data: action.payload,
          // allPokemons: action.payload.data,
          // pokemons: action.payload.pokemons.slice(20 * (action.payload.pokemons.count), (20 * (action.payload.pokemons.count +1)))
          // pokemons: [{"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"},{"name":"ivysaur","url":"https://pokeapi.co/api/v2/pokemon/2/"},{"name":"venusaur","url":"https://pokeapi.co/api/v2/pokemon/3/"},{"name":"charmander","url":"https://pokeapi.co/api/v2/pokemon/4/"},{"name":"charmeleon","url":"https://pokeapi.co/api/v2/pokemon/5/"},{"name":"charizard","url":"https://pokeapi.co/api/v2/pokemon/6/"},{"name":"squirtle","url":"https://pokeapi.co/api/v2/pokemon/7/"},{"name":"wartortle","url":"https://pokeapi.co/api/v2/pokemon/8/"},{"name":"blastoise","url":"https://pokeapi.co/api/v2/pokemon/9/"},{"name":"caterpie","url":"https://pokeapi.co/api/v2/pokemon/10/"},{"name":"metapod","url":"https://pokeapi.co/api/v2/pokemon/11/"},{"name":"butterfree","url":"https://pokeapi.co/api/v2/pokemon/12/"},{"name":"weedle","url":"https://pokeapi.co/api/v2/pokemon/13/"},{"name":"kakuna","url":"https://pokeapi.co/api/v2/pokemon/14/"},{"name":"beedrill","url":"https://pokeapi.co/api/v2/pokemon/15/"},{"name":"pidgey","url":"https://pokeapi.co/api/v2/pokemon/16/"},{"name":"pidgeotto","url":"https://pokeapi.co/api/v2/pokemon/17/"},{"name":"pidgeot","url":"https://pokeapi.co/api/v2/pokemon/18/"},{"name":"rattata","url":"https://pokeapi.co/api/v2/pokemon/19/"},{"name":"raticate","url":"https://pokeapi.co/api/v2/pokemon/20/"},{"name":"spearow","url":"https://pokeapi.co/api/v2/pokemon/21/"},{"name":"fearow","url":"https://pokeapi.co/api/v2/pokemon/22/"},{"name":"ekans","url":"https://pokeapi.co/api/v2/pokemon/23/"},{"name":"arbok","url":"https://pokeapi.co/api/v2/pokemon/24/"},{"name":"pikachu","url":"https://pokeapi.co/api/v2/pokemon/25/"},{"name":"raichu","url":"https://pokeapi.co/api/v2/pokemon/26/"},{"name":"sandshrew","url":"https://pokeapi.co/api/v2/pokemon/27/"},{"name":"sandslash","url":"https://pokeapi.co/api/v2/pokemon/28/"},{"name":"nidoran-f","url":"https://pokeapi.co/api/v2/pokemon/29/"},{"name":"nidorina","url":"https://pokeapi.co/api/v2/pokemon/30/"},{"name":"nidoqueen","url":"https://pokeapi.co/api/v2/pokemon/31/"},{"name":"nidoran-m","url":"https://pokeapi.co/api/v2/pokemon/32/"},{"name":"nidorino","url":"https://pokeapi.co/api/v2/pokemon/33/"},{"name":"nidoking","url":"https://pokeapi.co/api/v2/pokemon/34/"},{"name":"clefairy","url":"https://pokeapi.co/api/v2/pokemon/35/"},{"name":"clefable","url":"https://pokeapi.co/api/v2/pokemon/36/"},{"name":"vulpix","url":"https://pokeapi.co/api/v2/pokemon/37/"},{"name":"ninetales","url":"https://pokeapi.co/api/v2/pokemon/38/"},{"name":"jigglypuff","url":"https://pokeapi.co/api/v2/pokemon/39/"},{"name":"wigglytuff","url":"https://pokeapi.co/api/v2/pokemon/40/"},{"name":"zubat","url":"https://pokeapi.co/api/v2/pokemon/41/"}]
        };
      default:
        return state;
    }  
}

const rootReducer = combineReducers({
  counterReducer, 
  nameReducer,
  // initReducer
  gottacatchthemallReducer
})

// ========== STATE =========
const INITIAL_STATE = {};

// ============ createStore ============
// const store = createStore(reducer, INITIAL_STATE);
const store = createStore(rootReducer, INITIAL_STATE);

// ================ Action =================
/*
**  fonction changer de page
*/
function Counter() {
  // const count = useSelector(state => state.count);

  // HOOK instead mapproptoState
  const {count, pokemons, name, data} = useSelector(state => ({
    ...state.counterReducer,
    ...state.nameReducer,
    ...state.gottacatchthemallReducer
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

/*
**  function écrire un nom de pokemon
*/
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
      <input placeholder='pokemon' onChange={handleUpdateName} />
    </div>
  )
}

function GetAll() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    fetch("https://5cfabdcbf26e8c00146d0b0e.mockapi.io/tasks")
      .then(resp => resp.json())
      .then(data => data.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1)))
  }, []);

  function alldataGet(data) {
    dispatch({
      type: "GET_ALL",
      payload: data
    })
  }


  // // ========== componentDidMount hook avec useEffect =========
  async function fetchData(data) {
    var pokemons = [];
    const res = await  fetch("https://pokeapi.co/api/v2/pokemon/?limit=964");

    res
      .json()
      // .then( res => {console.table(res.results)})
      .then( res => {pokemons = (res.results).slice(0, 20)})
      .then( () => {console.table(pokemons)})
      .then( 
        dispatch({
            type : "GOTTA_CATCH_THEM_ALL", 
            // payload: res.results,
            data : res.results,
            pokemons : pokemons,
            payload: {
               data : res.results,
               allPokemons : res.results, 
               pokemons    : pokemons
            },
        }))
      .catch(err => console.log(err));
    }

    useEffect(() => {
      fetchData();
    }, [])

    useEffect(() => {
      console.log("LOLOLOL");
  },[]);
  return (
    <div>
      LOL
    </div>
  )

}

/*
**  function écrire un nom de pokemon
*/
// function GottaAll() {
//   const dispatch = useDispatch();

// // ========== componentDidMount hook avec useEffect =========
//   async function fetchData(data) {
//     var pokemons = [];
//     const res = await  fetch("https://pokeapi.co/api/v2/pokemon/?limit=964");

//     res
//       .json()
//       // .then( res => {console.table(res.results)})
//       .then( res => {pokemons = (res.results).slice(0, 20)})
//       // .then( () => {console.table(pokemons)})
//       .then( 
//         dispatch({
//             type : "GOTTA_CATCH_THEM_ALL", 
//             // payload: res.results,
//             data : res.results,
//             pokemons : pokemons,
//             payload: {
//                data : res.results,
//                allPokemons : res.results, 
//                pokemons    : pokemons
//             },
//         }))
//       .catch(err => console.log(err));
//     }

//     useEffect(() => {
//       fetchData();
//     }, []);// [] pour remplacer componentDidMount
//   return (
//     <></>
//   )
// }

// componentDidMount() {
//   const {dispatch} = this.props;
//   dispatch(fetchFiles);
// }

  
  class App extends Component {

  render() {

    return (
      <div className="App">
        <Provider store={store}>
          <Counter />
          <Name />
          {/* <GottaAll /> */}
          <GetAll />
        </ Provider>
    </div>
    );
  }
}

export default App;


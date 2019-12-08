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


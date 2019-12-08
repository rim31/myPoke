import React, { Component } from 'react';
import Pokemon from './Pokemon';
import Main from './Main';
// import PokemonAbibilities from './PokemonAbilities';

export default class Grid extends Component {
  constructor(props) {
    super(props);
    this.handleSelect   = this.handleSelect.bind(this);
    this.state = {
        imageCurrent  : '',
        data          : [],
        urlGif        : 'https://projectpokemon.org/images/normal-sprite/',
        urlPng        : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
        extGif        : '.gif',
        extPng        : '.png',
        pokemon       : {
                            'id'    : "xx42",
                            "name"  : "pikachu",
                            'sprite': "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6XMb5twV5bvYg7bxwu_3_NrUjaaaE7_qQFxAZgS97TZUirco6",
                            'type'  : "oseng"
                        },
        pokemonInfo    :{}
    };
  }

    /*
    ** fonction click pour afficher les détails des pokémons
    */
    handleSelect(selectedKey) {
        this.setState({imageCurrent: selectedKey})
        fetch(`http://pokeapi.co/api/v2/pokemon/${selectedKey}/`)
      .then(res => res.json())
      .then(data => {
        const pokemon = new Pokemon(data);
        // console.log(pokemon);
        this.setState({imageCurrent: pokemon.sprite})
        this.setState({pokemon: pokemon})
      })
      .catch(err => console.log(err));

      fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemon.name}/`)
      .then(res => res.json())
      .then(data => {
        this.setState({pokemonInfo: data})
        console.log(data);
      })
      .catch(err => console.log(err));
      };

  render() {

    return (
      <div className="sectionHeros" >
          <Main pokemons={this.state.pokemon} pokemonInfo={this.state.pokemonInfo}/>
          {/* <PokemonAbibilities pokemonInfo={this.state.pokemonInfo}/> */}
        <div className="container">
          <div className="flex-container" >
          {//parcous du tableau des 20 pokémons et afichage de leurs image et leurs noms
            this.props.pokemons.map((resultMap, key) =>
            <div className="herosCard" key={key} id={resultMap.name}  onClick={() => {this.handleSelect(resultMap.name)}}>
                {/* url d'image en fonction de la key et du numéro de la page */}
                <img className="imageGrid"  src={this.state.urlPng + (20*this.props.page+key+1) + this.state.extPng}  alt={resultMap.name} />
                <div>
                  <p>{resultMap.name}</p>
                </div>
            </div>)
          }
        </div>
        </div>
    </div>
    );
  }
}
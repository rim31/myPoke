import React, { Component } from 'react';
import Chip from '@material-ui/core/Chip';

const defaultAbilities = {
    "abilities": [
        {
          "ability": {
            "name": "lightning-rod",
            "url": "https://pokeapi.co/api/v2/ability/31/"
          },
          "is_hidden": true,
          "slot": 3
        },
        {
          "ability": {
            "name": "static",
            "url": "https://pokeapi.co/api/v2/ability/9/"
          },
          "is_hidden": false,
          "slot": 1
        }
      ]
}

export default class PokemonAbibilities extends Component {
   render() {
     console.table("=>"+this.props.pokemonInfo.abilities);
       let abilities = (this.props.pokemonInfo.abilities ? this.props.pokemonInfo.abilities.abilities : defaultAbilities);
       console.table("-->"+abilities);
       let ability = defaultAbilities.abilities.map((item,i) => (
      //  let ability = abilities.map((item,i) => (
        <Chip key={i} label={item.ability.name} />));
        // let test = abilities.map((item, key) =>
        //     <Chip label={item.ability.name} key={item.ability.name} />
        //   );
        return (
            <div>
                {ability}
                {/* {test} */}
                {(abilities ? abilities.abilities.map((item, key) =>
                    <Chip label={item.ability.name} key={item.ability.name} />
                ) : '')} 

            </div>
        );
      }
}
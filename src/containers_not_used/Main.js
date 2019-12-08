import React, { Component } from 'react';
import './styles/Main.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
// import PokemonAbibilities from './PokemonAbilities';


export default class Main extends Component {
  constructor(props) {
    super(props);
    this.handleFavorite = this.handleFavorite.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      myHeros  : [],// favoris
      number   : 0  // nombre de pokemon favoris
    };
  }

  handleFavorite(pokemon) {
    let myArray = this.state.myHeros;

    //ajout du pokemon
    myArray.push(pokemon);
    //suppression des doublons
    var seen = {};
    var out = [];
    var len = myArray.length;
    var j = 0;
    var item = '';
    for(var i = 0; i < len; i++) {
         item = myArray[i];
         if(seen[item] !== 1) {
               seen[item] = 1;
               out[j++] = item;
         }
    }
    this.setState({myHeros: out})
    this.setState({number: out.length})
  }


  // suppression de pokemon favoris
  handleDelete(pokemon) {
    let myArray = this.state.myHeros;

    //suppression du pokemon : on supprime du tableau en fonction de l'index trouvé
    let index = myArray.indexOf(pokemon);
    if (index > -1) {
      myArray.splice(index, 1);
    } 
    this.setState({number: myArray.length})
    this.setState({myHeros: myArray})
  }

  render() {
    return (
      <Card className="detail-view">
        <img src={'https://projectpokemon.org/images/normal-sprite/' + this.props.pokemons.name + '.gif'} className='sprite-image' alt="sprite"/>
         <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.pokemons.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <span className='data-name'>n°: {this.props.pokemons.id} </span>
              <span className="data-char"> - Type : {this.props.pokemons.type}</span>
            </Typography>
          </CardContent>
          {/* <PokemonAbibilities pokemonInfo={this.props.pokemonInfo}/> */}
        <CardActions>
          {/* boutton d'ajout de favoris */}
          <Button size="small"  variant="outlined"  onClick={() => {this.handleFavorite(this.props.pokemons.name)}}>Like</Button>
        </CardActions>
        <div>
          {this.state.number} Favoris
        </div>
        {/* liste des favoris supprimable */}
        {this.state.myHeros.map((item,i) => <Chip key={i} label={item} onDelete={() => {this.handleDelete(item)}} />)}
      </Card>
    );
  }
}
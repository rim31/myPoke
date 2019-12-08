import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import CardActions from '@material-ui/core/CardActions';


function Display() {
  // useSelector : permet d'utiliser des objets du store
    const {pokemon, id, favoris} = useSelector(state => ({
        ...state.nameReducer,
        ...state.selectorReducer,
        ...state.displayReducer
      }));
  const dispatch = useDispatch();


  function sendtoReducer(data) {
      dispatch({
        type : "FAVORITE", 
        payload: {
          favoris: data
        }
    })
  }

  function handleFavorite(pokemon) {
    if (pokemon) {
      var myArray = favoris;

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
      sendtoReducer(out);
    }

  }

   // suppression de pokemon favoris
   function handleDelete(pokemon) {
    var myArray = favoris;

    //suppression du pokemon : on supprime du tableau en fonction de l'index trouvé
    let index = myArray.indexOf(pokemon);
    if (index > -1) {
      myArray.splice(index, 1);
    } 
    sendtoReducer(myArray)
  }


  function getdetail(id, pokemon) {
    let data = "";

    console.log(id+pokemon);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      console.log(data.abilities[0].ability.name);
    })
    .catch(err => console.log(err));
    return data;
  };

  const urlGIF = "https://projectpokemon.org/images/normal-sprite/";
  var res;
  return (
    <div>
        <Card cellHeight={99} className="gridList">
          <figure className="image is-5by4">
            <img className="displayPokemon" src={urlGIF + pokemon + '.gif'} alt={pokemon} onChange={(res) => {getdetail(id, pokemon)}} />
          </figure>
          <div>
            <span>n° {id} - {pokemon}</span>
            <div>
              {res ? res.abilities[0].ability.name : ''}
            </div>
          </div>
          <CardActions>
            {/* boutton d'ajout de favoris */}
            <button className="button" size="small"  variant="outlined"  onClick={() => {handleFavorite(pokemon)}}>
            Like   .
              <span class="icon has-text-info">
                <i class="fas fa-heart"></i>
              </span>
            </button>

          </CardActions>
          <div>
            {favoris.length} Favoris
          </div>
          {/* liste des favoris supprimable */}
        </Card>
          {favoris.map((item,i) => <Chip key={i} label={item} onDelete={() => {handleDelete(item)}} />)}
    </div>
  )
}
export default Display;


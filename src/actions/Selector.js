import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ProgressiveImage from './ProgressiveImage';

/*
**  function selectionne un des pokemons sur la grille
*/
function Selector() {
  const {pokemons, count, name} = useSelector(state => ({
    ...state.counterReducer,
    ...state.nameReducer,
    ...state.getpokemonsReducer,
    ...state.selectorReducer,
    ...state.displayReducer
  }));
  const dispatch = useDispatch();

  function sendtoReducer(id, select, data) {
    dispatch({
      type : "SELECT", 
      payload: {id: id, select: select, details: data}
    })
  }
  function choose(id, select) {
    if (id) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${select}/`)
      .then(res => res.json())
      .then(data => {
        // console.table(dta);
        sendtoReducer(id, select, data);
        // console.log(data.base_experience+" exp");
      })
      .catch(err => console.log(err));
      };
    }

    /*
    ** pour affcher l'image du pokemon en 2D, on cherche le numero du pokémon que l'on va ajouter dans l'urlPNG
    */
  function parseUrl(url) {
    const urlPNG0 = "https://pokeapi.co/api/v2/pokemon/";
    
    url = (url.substring(urlPNG0.length));
    url = (url.substring(0, url.length-1));
    return url;
  }

  const urlPNG = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

  // pagination des 964 pokemons récupérés //
  /*
  ** si name est rechercher alors on filtre sur toutes la liste des 964 pokemons
  ** sinon, si la rechache name est vide, on affiche la pagination
  ** il faudrait supprimer la valeur name de recherche pour pas melanger page et recherche
  */
  const tileData = (
    !name ? 
    pokemons.slice(20*count, 20*(count+1)) :
    pokemons.filter(pokemons => pokemons.name.includes(name))
    );
  

  return (
    <div>
        <h3>{tileData.length} pokemons in this page</h3>
      <GridList cellHeight={160} cols={3} className="gridList">
        {/* {pokemons.map(((tile, key) => */}
        {tileData.map(((tile, key) =>
          <GridListTile className="imageGrid" key={tile.name} onClick={() => {choose(key+(20*count)+1, tile.name)}} >
            {/* <img src={urlPNG + (key+(20*count)+1) + '.png'} alt={tile.name} /> */}
            {/* <img src={urlPNG+tile.name+'.png'} alt={tile.name} /> */}
            {/* <img src={urlPNG+parseUrl(tile.url)+'.png'} alt={tile.name} /> */}
            <ProgressiveImage src={urlPNG+parseUrl(tile.url)+'.png'} alt={tile.name} />
            <GridListTileBar
              className="herosCard"
              title={tile.name}
              // subtitle={<span>n°: {key+(20*count)+1}</span>}
              subtitle={<span>n°: {parseUrl(tile.url)}</span>}
              style={{ height: '2.5rem' }}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

export default Selector;

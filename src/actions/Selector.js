import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

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
      <GridList cellHeight={160} cols={3} className="gridList">
        {/* {pokemons.map(((tile, key) => */}
        {tileData.map(((tile, key) =>
          <GridListTile className="imageGrid" key={tile.name} onClick={() => {choose(key+(20*count)+1, tile.name)}} >
            {/* <img src={urlPNG + (key+(20*count)+1) + '.png'} alt={tile.name} /> */}
            {/* <img src={urlPNG+tile.name+'.png'} alt={tile.name} /> */}
            <img src={urlPNG+parseUrl(tile.url)+'.png'} alt={tile.name} />
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

// import React from 'react';
// import PropTypes from 'prop-types';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import Typography from '@material-ui/core/Typography';
// import Skeleton from '@material-ui/lab/Skeleton';

// const data = [
//   {
//     src:
//       'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
//     title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
//     channel: 'Don Diablo',
//     views: '396 k views',
//     createdAt: 'a week ago',
//   },
//   {
//     src:
//       'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
//     title: 'Queen - Greatest Hits',
//     channel: 'Queen Official',
//     views: '40 M views',
//     createdAt: '3 years ago',
//   },
//   {
//     src:
//       'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
//     title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
//     channel: 'Calvin Harris',
//     views: '130 M views',
//     createdAt: '10 months ago',
//   },
// ];

// function Media(props) {
//   const { loading = false } = props;

//   return (
//     <Grid container wrap="nowrap">
//       {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
//         <Box key={index} width={210} marginRight={0.5} my={5}>
//           {item ? (
//             <img style={{ width: 210, height: 118 }} alt={item.title} src={item.src} />
//           ) : (
//             <Skeleton variant="rect" width={210} height={118} />
//           )}

//           {item ? (
//             <Box pr={2}>
//               <Typography gutterBottom variant="body2">
//                 {item.title}
//               </Typography>
//               <Typography display="block" variant="caption" color="textSecondary">
//                 {item.channel}
//               </Typography>
//               <Typography variant="caption" color="textSecondary">
//                 {`${item.views} • ${item.createdAt}`}
//               </Typography>
//             </Box>
//           ) : (
//             <Box pt={0.5}>
//               <Skeleton />
//               <Skeleton width="60%" />
//             </Box>
//           )}
//         </Box>
//       ))}
//     </Grid>
//   );
// }

// Media.propTypes = {
//   loading: PropTypes.bool,
// };

// export default function YouTube() {
//   return (
//     <Box overflow="hidden">
//       <Media loading />
//       <Media />
//     </Box>
//   );
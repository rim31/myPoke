import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Chip from '@material-ui/core/Chip';
// import Badge from '@material-ui/core/Badge';
// import Button from '@material-ui/core/Button';

function Favoris() {
    const {details, favoris} = useSelector(state => ({
        ...state.nameReducer,
        ...state.detailsReducer,
        ...state.displayReducer,
        ...state.selectorReducer,
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
    //   console.log("DETAILS");
      console.table(details?details:"rien");
    //   console.table(details?details.base_experience:"- xp");
    //   console.table(pokemons);
return (
    <>
      {/* <Badge color="primary" badgeContent={(favoris).length} className="">
        <Button variant="contained">
            <span class="icon has-text-info">
                <i class="fas fa-heart"></i>
            </span>
        </Button>
      </Badge> */}
      <div className="subtitle" ><strong>Favoris :</strong> </div>
        {favoris.map((item,i) => <Chip key={i} label={item} onDelete={() => {handleDelete(item)}} />)}
    </>
    )
}
export default Favoris;
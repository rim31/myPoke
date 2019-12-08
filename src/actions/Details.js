import React from 'react';
import {useSelector} from 'react-redux';


function Detail() {
    const {details} = useSelector(state => ({
        ...state.nameReducer,
        ...state.detailsReducer,
        ...state.displayReducer,
        ...state.selectorReducer,
      }));

    //   console.log("DETAILS");
    //   console.table(details?details.abilities[0].ability.name:"rien");
    //   console.table(details?details.base_experience:"- xp");
    //   console.table(pokemons);
return (
    <>
        <h5>DETAILS </h5>
        <div>{details ? details.weight+' lbs': 'weight'}</div>
        <div>{details ? details.base_experience+' exp': 'exp'}</div>
        <progress class="progress is-small is-primary" value={details ? details.base_experience: 0} max="500"></progress>
        <div>Abilities : 
            {details ? details.abilities.map((item,i) => 
            <span class="tag is-info is-light is-danger" key={i}>{item.ability.name}</span>): ''}
        </div>
        <div>Types : 
            {details ? details.types.map((item,i) => 
            <span class="tag is-info is-light" key={i}>{item.type.name}</span>): ''}
        </div>
    </>
    )
}
export default Detail;
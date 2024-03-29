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
    //   console.table(details);
return (
    <>
        <span className="subtitle" ><strong>Details :</strong> </span>
        <div>Types : 
            {details ? details.types.map((item,i) => 
            <span className="tag is-info is-light" key={i}>{item.type.name}</span>): ''}
        </div>
        <div>{details ? details.weight+' lbs': 'weight'}</div>
        <div>{details ? details.base_experience+' exp': 'exp'}</div>
        <progress className="progress is-small is-link" value={details ? details.base_experience: 0} max="500"></progress>
        <div>Abilities : 
            {details ? details.abilities.map((item,i) => 
            <span className="tag is-info is-light is-danger" key={i}>{item.ability.name}</span>): ''}
        </div>
        <div><strong>Stats : </strong>
            {details ? details.stats.map((item,i) => 
            <div key={i}>
                <progress key={item.base_stat+i} className="progress is-small is-primary" value={item.base_stat} max="200">{item.base_stat}</progress>
                <div key={item.stat.name+i}>{item.stat.name+'  : '+ item.base_stat}</div>
            </div>
            ):''}
        </div>
    </>
    )
}
export default Detail;
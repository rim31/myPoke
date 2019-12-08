import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

// ================ Action =================
/*
**  fonction changer de page
*/
function Counter() {
    // const count = useSelector(state => state.count);
    // HOOK instead mapproptoState
    const {count, pokemons} = useSelector(state => ({
    // const {count, pokemons, pokemon, name, id} = useSelector(state => ({
      ...state.counterReducer,
      ...state.nameReducer,
      ...state.getpokemonsReducer,
      ...state.selectorReducer,
      ...state.displayReducer
    }));
    const dispatch = useDispatch();
    const datum = pokemons.slice(20*count,20*(count+1));

    //mapDispatch : useDispatch
    function plusCount() {
      dispatch({
        type : "PLUS_COUNT",
        payload: {data: datum}
      })
    }
    
    function minusCount() {
      dispatch({
        type : "MINUS_COUNT",
        payload: {data: datum}
      })
    }
  
    return (
      <div>
        <h3>Page : {count}</h3>
         <a class="pagination-previous" onClick={minusCount}>Previous</a>
         <a class="pagination-next" onClick={plusCount}>Next page</a>
         {/* <h3>Name : {name}</h3>
         <h3>id : {id}</h3>
         <h3>Select : {pokemon}</h3> */}
      </div>
    ) ;
  }

  export default Counter;

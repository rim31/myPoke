import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux';
/*
**  function gettAll un nom de pokemon
*/
function Getpokemons() {
  const dispatch = useDispatch();

  function getAll(pokemons) {
      dispatch({
          type : "ALL", 
          payload: {
            pokemons : pokemons,
          }
      })
  }

  async function fetchData() {
    var pokemons = [];
    const res = await  fetch("https://pokeapi.co/api/v2/pokemon/?limit=964");

    res
      .json()
      .then( res => {pokemons = (res.results)})
      .then( () => getAll(pokemons))
      .catch(err => console.log(err));
    }

    // useEffect remplace componentDidMount
    useEffect(() => {
      fetchData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) // [], permet d'eviter une continelle fectch des data, pour se comporter comme componentDidMount


  return (
    <>
    </>
  )
}

  export default Getpokemons;

function getpokemonsReducer(state = {pokemons:[], data:[]}, action) {
    // console.table("payload all");
    // (action.payload ?  console.table(action.payload.pokemon) : console.log('lol'));
    switch (action.type) {
      case "ALL":
          return {
            ...state,
            pokemons: action.payload.pokemons,
            data: action.payload.data
          };
      default:
        return state;
    }
  };

  export default getpokemonsReducer;

  
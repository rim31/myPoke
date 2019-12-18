function counterReducer(state = {count:0, pokemons:[]}, action) {
  switch (action.type) {
      case "PLUS_COUNT":
        if (state.count < 49 ) {
          return {...state,
            count: state.count + 1,
            pokemons : state.pokemons,
          }
        } else {
          return state;
        }
        case "MINUS_COUNT":
          if (state.count > 0 ) {
            return {...state,
              count: state.count - 1,
              pokemons : state.pokemons,
            }
        } else {
          return state;
        }
      default:
        return state;
    }
  };
  
  export default counterReducer;

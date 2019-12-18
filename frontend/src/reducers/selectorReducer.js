// reducer choix du pokemon
function selectorReducer(state = {pokemon: 'pikachu', id: 'x42x',
  detail: [
      {
        "ability": {
          "name": "lightning-rod",
          "url": "https://pokeapi.co/api/v2/ability/31/"
        },
        "is_hidden": true,
        "slot": 3
      },
      {
        "ability": {
          "name": "static",
          "url": "https://pokeapi.co/api/v2/ability/9/"
        },
        "is_hidden": false,
        "slot": 1
      }
    ]}
, action) {
    switch (action.type) {
      case "SELECT":
        return {
          ...state,
          pokemon: action.payload.select,
          id: action.payload.id,
          details: action.payload.details
        };
      default:
        return state;
    }  
}

export default selectorReducer;

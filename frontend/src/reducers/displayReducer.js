// reducer favoris de nom
function displayReducer(state = {favoris:['oseng']}, action) {
    switch (action.type) {
      case "FAVORITE":
        return {
          ...state,
          favoris: action.payload.favoris
        };
      default:
        return state;
    }  
}

export default displayReducer;

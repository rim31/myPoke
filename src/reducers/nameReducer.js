// reducer changement de nom
function nameReducer(state = {name:''}, action) {
    switch (action.type) {
      case "UPDATE_NAME":
        return {
          ...state,
          name: action.payload
        };
      default:
        return state;
    }  
}

export default nameReducer;

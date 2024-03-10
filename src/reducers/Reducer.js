const initialState = {
    recipes: [],
  };
  
  const recipesReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_RECIPES":
        return { ...state, recipes: action.payload };
      default:
        return state;
    }
  };
  
  export default recipesReducer;
  
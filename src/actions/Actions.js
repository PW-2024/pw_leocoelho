export const fetchRecipes = () => async dispatch => {
    const url = "https://raw.githubusercontent.com/adrianosferreira/afrodite.json/master/afrodite.json";
    try {
      const response = await fetch(url);
      const data = await response.json();
      const shuffled = data.sort(() => 0.5 - Math.random()).slice(0, 20);
      dispatch({ type: "SET_RECIPES", payload: shuffled });
    } catch (error) {
      console.error("Fetching error:", error);
    }
  };
  
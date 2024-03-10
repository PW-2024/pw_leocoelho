// App.js or another component
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import RoutesApp from './routes';

const url = "https://raw.githubusercontent.com/adrianosferreira/afrodite.json/master/afrodite.json";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const shuffled = data.sort(() => 0.5 - Math.random());
        setRecipes(shuffled.slice(0, 20));
      })
      .catch(error => console.error("Fetching error:", error));
  }, []);

  
  console.log(recipes);

  return (
    <div>
      <Header />
      <RoutesApp recipes={recipes} />
    </div>
  );
}

export default App;

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
        // Filtra as receitas para incluir apenas aquelas que têm uma seção de "Ingredientes" com itens
        const filteredRecipes = data.filter(recipe => {
          const ingredientes = recipe.secao.find(sec => sec.nome.trim().toLowerCase().includes("ingredientes"));
          return ingredientes && ingredientes.conteudo.length > 0;
        });

        // Embaralha e seleciona as primeiras 20 receitas da lista filtrada
        const shuffled = filteredRecipes.sort(() => 0.5 - Math.random());
        setRecipes(shuffled.slice(0, 20));
      })
      .catch(error => console.error("Fetching error:", error));
  }, []);

  return (
    <div>
      <Header />
      <RoutesApp recipes={recipes} />
    </div>
  );
}

export default App;

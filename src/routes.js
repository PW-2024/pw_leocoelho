// RoutesApp.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Recipes from './pages/Recipes';
import Notfound from './pages/404';
import RecipeDetail from './pages/RecipeDetail';

function RoutesApp({ recipes }) { 
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/recipes" element={<Recipes recipes={recipes} />}> 
        <Route path=":recipeId" element={<RecipeDetail />} />
      </Route>

      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default RoutesApp;


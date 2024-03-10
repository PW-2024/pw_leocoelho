import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Recipes({ recipes }) {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Choose a Recipe</h1>
      <div className="flex gap-4 flex-wrap justify-center">
        {recipes.map((recipe) => (
          <Link
            key={recipe._id.$oid}
            to={{
              pathname: `/recipes/${recipe._id.$oid}`,
              state: { recipe }
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {recipe.nome}
          </Link>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

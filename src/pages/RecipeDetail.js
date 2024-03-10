import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

export default function RecipeDetail() {
    const { recipeId } = useParams();
    const location = useLocation();
    const [recipe, setRecipe] = useState(location.state ? location.state.recipe : null);

    useEffect(() => {
        if (!recipe) {
            console.log("Recipe not found or direct access, recipeId is:", recipeId);
            // Aqui, você poderia implementar uma lógica para buscar a receita pelo ID, se necessário
            // Exemplo: fetch(`SUA_API/${recipeId}`).then(...).then(setRecipe);
        } else {
            console.log("Recipe loaded, name is:", recipe.nome);
        }
    }, [recipe, recipeId]);

    if (!recipe) {
        return <div>Loading or recipe not found...</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{recipe.nome}</h1>
            {/* Renderize os detalhes da receita aqui */}
        </div>
    );
}

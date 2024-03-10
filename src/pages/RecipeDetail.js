import React from "react";
import { useLocation } from "react-router-dom";

export default function RecipeDetail() {
    const location = useLocation();
    const recipe = location.state;

    if (!recipe) {
        return <div>Recipe not found</div>;
    }

    const ingredientes = recipe.secao.find(sec => sec.nome.trim().toLowerCase() === "ingredientes");
    const modoDePreparo = recipe.secao.find(sec => sec.nome.trim().toLowerCase() === "modo de preparo");

    return (
        <div className="flex flex-col items-center justify-center p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">{recipe.nome}</h1>
            <div className="flex flex-wrap justify-around w-full md:w-2/3">
                <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Ingredientes</h2>
                    <ul className="list-disc pl-5">
                        {ingredientes && ingredientes.conteudo.map((item, index) => (
                            <li key={index} className="text-gray-600">{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Modo de Preparo</h2>
                    <ul className="list-disc pl-5">
                        {modoDePreparo && modoDePreparo.conteudo.map((item, index) => (
                            <li key={index} className="text-gray-600">{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

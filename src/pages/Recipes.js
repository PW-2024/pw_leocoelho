import React from "react";
import { Link, Outlet } from "react-router-dom"; // Importe o Link do react-router-dom

export default function Recipes() {
    const categories = [
        { name: "Feijoada à brasileira", path: "/recipes/feijoada-brasileira" },
        { name: "Francesinha à moda do Porto", path: "/recipes/francesinha-porto" },
        { name: "Leitão da Mealhada", path: "/recipes/leitao-mealhada" },
        { name: "Chafana de Miranda do Corvo", path: "/recipes/chafana-miranda" },
        { name: "Pastéis de Nata", path: "/recipes/pasteis-nata" }
    ];

    return (
        <div className="flex flex-col items-center justify-center p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Choose a Recipe</h1>
            <div className="flex gap-4 flex-wrap justify-center">
                {categories.map((category) => (
                    <Link
                        key={category.name}
                        to={category.path}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        {category.name}
                    </Link>
                ))}
            </div>
            <Outlet />
        </div>
    );
}

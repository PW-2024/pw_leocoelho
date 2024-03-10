import React from 'react';
import { Link } from 'react-router-dom'; // Importe Link de 'react-router-dom'
import logoua from '../../assets/UA-Complementar-BRANCO.png'; // Importe a imagem da logo
import photo from '../../assets/IMG_0098_Original.jpg'; // Importe a foto

export default function Header() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        
        <img src={logoua} alt="Logo" className="h-12 w-auto" />

        <div className="flex space-x-4">
          <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Dashboard
          </Link>

          <Link to="/recipes" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Recipes
          </Link>
        </div>

        <img src={photo} alt="Profile" className="h-8 w-8 rounded-full" />
      </div>
    </nav>
  );
}

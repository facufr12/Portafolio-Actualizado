import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importa Link

const Navbarnueva = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <nav className="bg-[#0e0816] fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-end">
            {/* Botón de menú móvil */}
            <div className="sm:hidden absolute right-4">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Menu
              </button>
            </div>

            {/* Links */}
            <div
              className={`${
                isOpen ? "translate-x-0" : "-translate-x-full"
              } transform transition-transform duration-300 ease-in-out absolute sm:relative top-16 left-0 sm:top-auto sm:left-auto sm:translate-x-0 sm:flex sm:w-auto`}
            >
              <div className="flex flex-col sm:flex-row sm:space-x-4 bg-[#0e0816] sm:bg-transparent w-full sm:w-auto">
                <Link
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic
                >
                  Fr
                </Link>
                <Link
                  to="/projects"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic
                >
                  Projects
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbarnueva;

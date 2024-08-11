import React, { useState } from "react";

const Navbarnueva = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#0e0816] fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center h-20">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">
            {/* Botón de menú móvil */}
            <div className="flex items-center sm:hidden absolute right-4">
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
              } transform transition-transform duration-300 ease-in-out sm:flex sm:w-1/2 md:w-1/3 lg:w-1/4 space-y-2 sm:space-y-0 absolute sm:relative top-10 left-0 sm:top-auto sm:left-auto sm:translate-x-0`}
            >
              <div className="flex flex-col sm:flex-row sm:space-x-4 sm:justify-end bg-[#0e0816] sm:bg-transparent w-full sm:w-auto">
                <a
                  href="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Fr
                </a>
                <a
                  href="/projects"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Projects
                </a>
                <a
                  href="/contact"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbarnueva;

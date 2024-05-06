import React from 'react';

const Card = () => {
  return (
    <div className="max-w-sm mx-auto  bg-white rounded-lg overflow-hidden shadow-lg">
   
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Nombre del artículo</div>
        <p className="text-gray-700 text-base">
          Descripción del artículo. Puedes agregar aquí más detalles sobre el artículo que estás mostrando en la tarjeta.
        </p>
      </div>
    </div>
  );
};

export default Card;

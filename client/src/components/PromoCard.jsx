import React from 'react';

function PromoCard({bgClassName, icon, title, description}) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 text-center">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${bgClassName}`}>
            {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
  ) 
}

export default PromoCard;
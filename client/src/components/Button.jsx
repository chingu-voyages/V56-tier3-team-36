import React from 'react';

function Button({title, onPress}) {
  return (
    <div className="text-center">
        <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300"
            onClick={onPress}
        >
            {title}
        </button>
    </div>
  ) 
}

export default Button;
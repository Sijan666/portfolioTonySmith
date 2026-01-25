

import React from 'react';

const Workshover = ({ src, title, subtitle, className }) => {
    return (
        <div className={`relative group overflow-hidden rounded-lg ${className}`}>
        <img 
            src={src} 
            alt={title} 
            className="w-full h-auto object-cover block transition-transform duration-300 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 duration-300 flex flex-col justify-center items-center text-white text-center p-4">
            <h3 className="text-2xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 duration-300">
            {title}
            </h3>
            <p className="text-sm font-medium text-gray-200 translate-y-4 group-hover:translate-y-0 duration-300">
            {subtitle}
            </p>
        </div>
        </div>
    );
};

export default Workshover;
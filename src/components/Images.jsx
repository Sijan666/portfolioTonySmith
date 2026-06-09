import React from 'react';

const Images = ({ imgSrc, className, altText }) => {
    return (
        <img 
            className={`${className}`} 
            src={imgSrc} 
            alt={altText} 
            loading="lazy" 
        />
    )
}

export default Images;
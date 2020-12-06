import React from "react";
import PropTypes from 'prop-types';

function RecipeItems(title, image) {
  return (
    <>
      <div>
        {recipe.map((recipe) => (
          <>
            <p key={title}>{title}</p>
            <img key={image} src={image} alt={title} />
          </>
        ))}
      </div>
    </>
  );
}

RecipeItems.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}; 

export default RecipeItems;

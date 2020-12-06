import React from "react";
import PropTypes from "prop-types";
import IngredientList from "./IngredientList";

function RecipeItems({ title, thumbnail, ingredients }) {
  return (
    <div>
      <h1>{title}</h1>
      <img src={thumbnail} alt={title} />
      <IngredientList ingredients={ingredients} />
    </div>
  );
}

RecipeItems.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired,
};

export default RecipeItems;

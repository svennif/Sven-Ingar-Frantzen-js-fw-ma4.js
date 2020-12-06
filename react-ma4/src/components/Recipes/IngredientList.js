import React from "react";
import PropTypes from "prop-types";

function IngredientList({ ingredients }) {
  const list = ingredients.split(",");
  return (
    <ul>
      {list.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ))}
    </ul>
  );
}

IngredientList.propTypes = {
  ingredient: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default IngredientList;

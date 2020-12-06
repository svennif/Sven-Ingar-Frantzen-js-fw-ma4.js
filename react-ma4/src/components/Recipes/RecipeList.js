import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { BASE_URL } from "./Api";
import RecipeItems from "./RecipeItems";

export default function RecipeList() {
  const [recipe, setRecipe] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((json) => setRecipe(json.results))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  const filterRecipe = function (e) {
    const searchValue = e.target.value.toLowerCase();

    const filterArray = recipe.filter(function (char) {
      const lowerCaseName = char.name.toLowerCase();

      if (lowerCaseName.startsWith(searchValue)) {
        return true;
      }
      return false;
    });

    setFilteredRecipes(filterArray);
  };

  if (loading) {
    return <Spinner animation="border" className="spinner" />;
  }
  return (
    <>
      <Search handleSearch={filterRecipe} />
      <div>
        {filteredRecipes.map((recipe) => {
          const { title, image } = recipe;
          return <RecipeItems title={title} image={image} />;
        })}
      </div>
    </>
  );
  /*return (
    <>
      <div>
        {recipe.map((recipe) => (
          <>
            <p key={recipe.title}>{recipe.title}</p>
            <img
              key={recipe.thumbnail}
              src={recipe.thumbnail}
              alt={recipe.href}
            />
          </>
        ))}
      </div>
    </>
  );*/
}

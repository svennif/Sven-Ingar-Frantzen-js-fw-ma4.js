import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { BASE_URL } from "./Api";
import RecipeItem from "./RecipeItem";
import SearchRecipe from "./SearchRecipe";

export default function RecipeList() {
  const [recipe, setRecipe] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((json) => {
        setRecipe(json.results);
        setFilteredRecipes(json.results);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  const filterRecipe = function (e) {
    const searchValue = e.target.value.toLowerCase();

    const filterArray = recipe.filter(function (char) {
      const lowerCaseName = char.title.toLowerCase();

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
      <SearchRecipe handleSearch={filterRecipe} />
      <div>
        {filteredRecipes.map(({ title, thumbnail, ingredients }) => (
          <RecipeItem
            key={title}
            title={title}
            thumbnail={thumbnail}
            ingredients={ingredients}
          />
        ))}
      </div>
    </>
  );
}

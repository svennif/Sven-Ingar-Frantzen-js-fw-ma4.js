import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { BASE_URL } from "./Api";

export default function RecipeList() {
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((json) => setRecipe(json.results))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Spinner animation="border" className="spinner" />;
  }
  return (
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
  );
}

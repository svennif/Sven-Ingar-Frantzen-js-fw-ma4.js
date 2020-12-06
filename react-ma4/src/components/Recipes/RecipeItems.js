import React from 'react';
import {setRecipes} from './RecipeList';

function RecipeItems() {
    return (
        <ul>
        {recipes.map(recipes => (
            <li key={recipes.title}>{recipes.title}</li>
        ))}
    </ul>
    )
}

export default RecipeItems; 
import React, {
    useState,
    useEffect
} from "react";
import {
    BASE_URL
} from "../Api";


export default function RecipeItems() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(json => setRecipes(json.results))
            .catch(error => console.log(error));
    }, []);

    return (
        <ul>
            {recipes.map(recipes => (
                <li key={recipes.title}>{recipes.title}</li>
            ))}
        </ul>
    );

}
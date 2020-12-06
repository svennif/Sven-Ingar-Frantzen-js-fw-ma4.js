import React, {
    useState,
    useEffect
} from "react";
import {
    BASE_URL
} from "../Api";
import Spinner from "react-bootstrap/Spinner";
import RecipeItems from './RecipeItems';
// import proptypes from 'prop-types';


export default function RecipeList() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch API 
    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(json => setRecipes(json.results))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <Spinner animation = "border"
        className = "spinner"
        variant = "primary" /> ;
    }
        return (
            <RecipeItems />
        );
}

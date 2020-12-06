import React from 'react';
import Heading from './Heading/Heading';
import RecipeList from './Recipes/RecipeList';

function Layout() {
    return (
        <div>
            <Heading content="Hello world!"/>
            <RecipeList />
        </div>
    )
}

export default Layout;

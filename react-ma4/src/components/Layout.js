import React from 'react';
import Heading from './Heading/Heading';
import RecipeItems from './Recipes/RecipeItems';

function Layout() {
    return (
        <div>
            <Heading content="Hello world!"/>
            <RecipeItems />
        </div>
    )
}

export default Layout;

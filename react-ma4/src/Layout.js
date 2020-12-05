import React from 'react';
import Heading from './components/Heading/Heading';
import RecipeItems from './components/Recipes/RecipeItems';

function Layout() {
    return (
        <div>
            <Heading content="Hello world!"/>
            <RecipeItems />
        </div>
    )
}

export default Layout;

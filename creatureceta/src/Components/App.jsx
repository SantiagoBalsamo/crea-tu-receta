import React, { useState } from 'react'
import Home from './Home'
import CreateRecipe from './CreateRecipe'
import RecipeHistory from './RecipeHistory'



const App = () => {
  const [navegate, setNavegate] = useState('home');
  const [recipes, setRecipes] = useState(
    JSON.parse(localStorage.getItem('recipes')) || []
  );

  const saveRecipe = (newRecipe) => {
    const updateRecipes = [...recipes, newRecipe];
    setRecipes(updateRecipes)
  };

  const deleteRecipe = (recipeName) => {
    const updateRecipes = recipes.filter((recipe) => recipe.name !== recipeName);
    setRecipes(updateRecipes);
    localStorage.setItem('recipes', JSON.stringify(updateRecipes));
  };


  const goBack = () => setNavegate('home');

  return (
    <div>
      {navegate === 'home' && <Home setNavegate={setNavegate} />}
      {navegate === 'create-recipe' && (
        <CreateRecipe
          saveRecipe={saveRecipe}
          goBack={goBack} />
      )}
      {navegate === 'history-recipes' && <RecipeHistory
        recipes={recipes}
        deleteRecipe={deleteRecipe}
        goBack={goBack} />}
    </div>
  )
}

export default App


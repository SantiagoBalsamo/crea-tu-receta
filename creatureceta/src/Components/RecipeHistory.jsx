import React from 'react';
import PropTypes from 'prop-types';
import RecipeCard from './RecipeCard';
import './RecipeHistory.css';

const RecipeHistory = ({ recipes, deleteRecipe, goBack }) => {
  return (
    <div className="recipe-history">
      <button
        onClick={goBack}
        className="goBack-btn"
        aria-label="Volver a la pantalla anterior"
      >
        Volver
      </button>
      <h3>Historial de recetas</h3>
      {recipes.length === 0 ? (
        <p>No hay recetas guardadas</p>
      ) : (
        <div className="recipe-list">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.name} 
              receta={recipe}
              onDelete={deleteRecipe}
            />
          ))}
        </div>
      )}
    </div>
  );
};


RecipeHistory.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      ingredientes: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          cantidad: PropTypes.number.isRequired,
        })
      ).isRequired,
      nutritionalScore: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    })
  ).isRequired,
  deleteRecipe: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
};

export default RecipeHistory;

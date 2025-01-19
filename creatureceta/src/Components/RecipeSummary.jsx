import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './RecipeSummary.css';

const RecipeSummary = ({ saveRecipe, elegirIngredientes }) => {
  const [recipeName, setRecipeName] = useState('');
  const [nutritionalScore, setNutritionalScore] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    const score = elegirIngredientes.reduce(
      (total, ingrediente) => total + (ingrediente.cantidad || 0) * 10,
      0
    );
    setNutritionalScore(score);
  }, [elegirIngredientes]);

  const handleSave = () => {
    if (!recipeName.trim()) {
      setError('El nombre de la receta no puede estar vacío.');
      return;
    }

    const newRecipe = {
      name: recipeName,
      ingredientes: elegirIngredientes,
      nutritionalScore,
    };

    saveRecipe(newRecipe);
    setRecipeName('');
    setError('');
    alert('Receta guardada exitosamente!');
  };

  return (
    <div className="recipe-summary">
      <h3>Ponle nombre a tu receta!</h3>
      <input
        type="text"
        placeholder="Nombre de la receta"
        value={recipeName}
        onChange={(e) => setRecipeName(e.target.value)}
        aria-label="Campo para el nombre de la receta"
      />
      {error && <p className="error-message">{error}</p>}
      <p>
        Puntaje nutricional: <strong>{nutritionalScore}</strong>
      </p>
      <button onClick={handleSave} aria-label="Guardar la receta">
        Guardar Receta
      </button>
    </div>
  );
};


RecipeSummary.propTypes = {
  saveRecipe: PropTypes.func.isRequired,
  elegirIngredientes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      cantidad: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default RecipeSummary;

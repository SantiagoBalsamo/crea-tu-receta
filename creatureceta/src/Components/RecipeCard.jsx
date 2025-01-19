import React from 'react';
import PropTypes from 'prop-types';
import './RecipeCard.css';

const RecipeCard = ({ receta, onDelete }) => {
  const { name = 'Receta sin nombre', ingredientes = [], nutritionalScore = 'No disponible' } = receta;

  return (
    <div className="recipe-card">
      <h4 className="recipe-name">{name}</h4>
      <p>Puntaje Nutricional: {nutritionalScore}</p>
      <h5>Ingredientes:</h5>
      <ul>
        {ingredientes.map((ingrediente) => (
          <li key={`${ingrediente.name}-${ingrediente.cantidad}`}>
            {ingrediente.name || 'Ingrediente desconocido'}: {ingrediente.cantidad || 0}
          </li>
        ))}
      </ul>
      <button
        className="delete-btn"
        onClick={() => onDelete(name)}
        aria-label={`Eliminar receta ${name}`}
      >
        Eliminar
      </button>
    </div>
  );
};

// Validación de los props
RecipeCard.propTypes = {
  receta: PropTypes.shape({
    name: PropTypes.string.isRequired,
    ingredientes: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        cantidad: PropTypes.number.isRequired,
      })
    ).isRequired,
    nutritionalScore: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default RecipeCard;

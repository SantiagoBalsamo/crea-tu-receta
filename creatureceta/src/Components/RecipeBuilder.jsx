import React from 'react';
import PropTypes from 'prop-types';
import './RecipeBuilder.css';

const RecipeBuilder = ({ elegirIngredientes = [], setElegirIngredientes }) => {
 
  const handleOnChange = (ingredient, nuevaCantidad) => {
    if (nuevaCantidad < 0) return;

    setElegirIngredientes((prevIngredients) =>
      prevIngredients.map((item) =>
        item.name === ingredient.name
          ? { ...item, cantidad: nuevaCantidad }
          : item
      )
    );
  };

  return (
    <div className="recipe-builder">
      <h3>Ingredientes</h3>
      {elegirIngredientes.length === 0 ? (
        <p>No hay ingredientes seleccionados</p>
      ) : (
        <ul>
          {elegirIngredientes.map((ingrediente) => (
            <li key={ingrediente.name}>
              {ingrediente.name}
              <input
                type="number"
                min="0"
                value={ingrediente.cantidad || 0}
                onChange={(e) =>
                  handleOnChange(ingrediente, parseInt(e.target.value, 10) || 0)
                }
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Validación de los props
RecipeBuilder.propTypes = {
  elegirIngredientes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      cantidad: PropTypes.number.isRequired,
    })
  ).isRequired,
  setElegirIngredientes: PropTypes.func.isRequired,
};

export default RecipeBuilder;

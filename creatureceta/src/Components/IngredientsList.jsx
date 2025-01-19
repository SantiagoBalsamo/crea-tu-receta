import React from 'react';
import PropTypes from 'prop-types'; 
import '../Components/IngredientList.css';

const IngredientsList = ({ elegirIngredientes, setElegirIngredientes }) => {
  const ingredientes = {
    Proteinas: ['Carne', 'Pollo', 'Huevos', 'Tofu', 'pescado'],
    Carbohidratos: ['Papas', 'Arroz', 'Pastas', 'Pan'],
    Vegetales: ['Cebolla', 'Zanahoria', 'Lechuga', 'Tomate', 'Choclo'],
    Otros: ['Sal', 'Aceite', 'Especias'],
  };

  const handleIngredientClick = (ingrediente) => {
    if (!elegirIngredientes.some((item) => item.name === ingrediente)) {
      setElegirIngredientes([
        ...elegirIngredientes,
        { name: ingrediente, cantidad: 0 },
      ]);
    }
  };

  return (
    <div className="ingredient-list-container">
      <h2>¡Elige tus ingredientes!</h2>
      {Object.entries(ingredientes).map(([category, items]) => (
        <div key={category} className="ingredients-category">
          <h3>{category}</h3>
          <ul>
            {items.map((ingrediente) => (
              <li key={ingrediente} className="ingredient-item">
                <button
                  type="button"
                  className="ingredient-button"
                  onClick={() => handleIngredientClick(ingrediente)}
                >
                  {ingrediente}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};


IngredientsList.propTypes = {
  elegirIngredientes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      cantidad: PropTypes.number.isRequired,
    })
  ).isRequired,
  setElegirIngredientes: PropTypes.func.isRequired,
};

export default IngredientsList;


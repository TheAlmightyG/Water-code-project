import React, {useState}from 'react';
import IngredientChart from './IngredientChart';

const RecipeNutritionCalculator = () => {
    const [ingredients, setIngredients] = useState([]);
    const [totalNutrition, setTotalNutrition] = useState(null);
    const [recipeName, setRecipeName] = useState('');
    const [ingredientName, setIngredientName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [error, setError] = useState('');
    const [measurement, setMeasurement] = useState('grams');

    const measurements = ['grams', 'cups', 'tablespoons', 'teaspoons', 'liters', 'milliliters', 'ounces'];

    const handleAddIngredient = () => {
      if (ingredientName.trim()==='' || quantity.trim()===''){
          alert('Please enter both ingredient name an quantity.');
          return;
      }  

      setIngredients([...ingredients, {name: ingredientName.trim(), quantity:quantity.trim(), measurement, }]);
      setIngredientName('');
      setQuantity('');
      setMeasurement('grams');

    };

    const handleIngredientNameChange = (e) => {
        setIngredientName(e.target.value);
    };

    const handleQuantityChange = (e) => {
        const value = e.target.value;
        if (isNaN(value) && value !== '') {
            setError('Quantity must be a number');
        } else {
            setError('');
            setQuantity(value);
        }
    };

    const handleMeasurementChange = (e) => {
        setMeasurement(e.target.value);
    };

    const handleCalculateNutrition = () => {
       if (ingredients.length === 0) {
           alert('Please add at least one ingredient before calculating nutrition.');
           return;
       }

       const total = ingredients.reduce(
           (acc, ingredient) => {
               acc.calories += Math.random() * 100;
               acc.protein += Math.random() * 10;
               acc.carbs += Math.random() * 20;
               acc.fat += Math.random() *5;     
               return acc;     
             },
             { calories: 0, protien: 0, carbs: 0, fat: 0 }
       );

       setTotalNutrition(total);
    };

    const handleClearIngredients =() => {
        setIngredients([]);
        setTotalNutrition(null);
    };

    return (
        <div>
            <h1>Recipe Nutrition Calculator</h1>

            {/* Recipe Name input */}
            <div>
                <label>
                    Recipe name:
                    <input
                        type="text"
                        value={recipeName}
                        onChange={(e)=> setRecipeName(e.target.value)}
                        placeholder="Enter recipe name"
                    />
                </label>
            </div>

            {/* Ingredient Input */}
            <div>
                <label>
                    Ingredient Name:
                    <input
                        type="text"
                        value={ingredientName}
                        onChange={handleIngredientNameChange}
                        placeholder="Enter ingredient name"
                        />
                    </label>
                    <label>
                        Quantity:
                        <input
                            type="text"
                            value={quantity}
                            onChange={handleQuantityChange}
                            placeholder="Enter quantity (e.g.,grams)"
                        />
                    </label>
                    <label>
                        Measurement:
                        <select value={measurement} onChange={handleMeasurementChange}>
                            {measurements.map((unit) => (
                                <option key={unit} value={unit}>
                                    {unit}
                                </option>
                            ))}
                        </select>
                    </label>
                    <button onClick={handleAddIngredient}>Add Ingredient</button>
                    {ingredients.length > 0 && (
                        <IngredientChart ingredients={ingredients}/>
                    )}
                </div>

            {/* Ingredients List */}
            <h3>Ingredients:</h3>
            <ul>
                {ingredients.map((ingredient, index)=> (
                    <li key={index}>
                        {ingredient.name} - {ingredient.quantity} - {ingredient.measurement}
                    </li>
                ))}
            </ul>

            {/* Action Buttons */}
            <div>
                <button onClick={handleCalculateNutrition}>Calculate Nutrition</button>
                <button onClick={handleClearIngredients}>Clear Ingredients</button>
                <button onClick={() => alert('Recipe ' + {recipeName} + ' saved successfully!')}>
                    Save Recipe
                </button>
            </div>

            {/* Nutrition Details */}
            {totalNutrition && (
                <div>
                    <h3>Total Nutrition</h3>
                    <p>Calories: {totalNutrition.calories.toFixed(2)}</p>
                    <p>Protien: {totalNutrition.protien.toFixed(2)}g</p>
                    <p>Carbs: {totalNutrition.carbs.toFixed(2)}g</p>
                    <p>Fat: {totalNutrition.fat.toFixed(2)}g</p>
                </div>
            )}
        </div>
    );
};

export default RecipeNutritionCalculator;
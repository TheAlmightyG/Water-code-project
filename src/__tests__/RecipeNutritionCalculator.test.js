import { render, screen, fireEvent } from '@testing-library/react';
import RecipeNutritionCalculator from '../Button.js'
import { test } from 'node/test';
import { EXPECTED_COLOR } from 'jest-matcher-utils';

test('updates measurement state when dropdown value changes', () => {
    render(<RecipeNutritionCalculator />);
    const dropdown = screen.getByLabelText(/Measurement:/i);

    fireEvent.change(dropdown, { target: {value: 'cups '} });

   expect(dropdown.value).tobe('cups');

});

test('shows error when submitting whith empty fields', () => {
    render(<RecipeNutritionCalculator />);
    const button = screen.getByText(/Add Ingredient/i);

    fireEvent.click(button);

    const error = screen.getByText(/Both fields are required/i);
    expect(error).toBeInTheDocument();
});

test('adds an ingredient and displays it in the list', () => {
    render(<RecipeNutritionCalculator />);
    const nameInput = screen.getByPlaceholderText(/Enter ingredient name/i);
    const quantityInput = screen.getByPlaceholderText(/Enter quantity/i);
    const dropdown = screen.getByLableText(/Measurement:/i);
    const button = screen.getByText(/Add Ingredient/i);

    fireEvent.change(nameInput, {target: {value: 'Flour'}});
    fireEvent.change(quantityInput, { target: { value: '2'}});
    fireEvent.change(dropdown, {target: { value: 'cups'}});
    fireEvent.click(button);

    const ingredient = screen.getByText(/Flour: 2 cups/i);
    expect(ingredient).toBeInTheDocument();
});
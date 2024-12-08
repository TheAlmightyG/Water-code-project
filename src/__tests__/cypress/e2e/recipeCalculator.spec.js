import { describe } from "jest-circus";
import { it } from "node/test";

describe('Recipe Nutrition Calculator', () => {
    it('allows users to add ingredient and displays it in the list', () => {
        cy.visit('http://localhost:3000');

        cy.get('input[placeholder="Enter ingredient name"]').type('Sugar');
        cy.get('input[placeholder="Enter quantity"]').type('1');
        cy.get('select').select('cups');
        cy.contains('Add Ingredient').click();
        cy.contains('Sugar: 1 cups').should('be.visible');
    });

    it('shows an error when fields are empty', () => {
        cy.visit('http://localhost:3000');

        cy.contains('Add Ingredient').click();

        cy.contains('Both fields are required').should('be.visible');
    });
});
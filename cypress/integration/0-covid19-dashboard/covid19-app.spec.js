/* eslint-disable */
describe('The entire page', () => {
  it('loads successfully', () => {
    cy.visit('http://localhost:3000');

    cy.get('nav')
      .should('be.visible')
      .within(() => {
        cy.get('div').should('contain.text', 'Covid 19 Dashboard');

        cy.get('button').click();
      });

      cy.get('select').type('Something{enter}');

      cy.get('h1').should('contain.text','Search for a Country');

      cy.get('input').should('have.value', '');


  });
});

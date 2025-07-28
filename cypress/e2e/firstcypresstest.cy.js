describe('Test suite 1', () => {
  it('First test', () => {
    cy.visit('https://www.amazon.in/')
    cy.title().should('contain','Amazon.in')

    cy.get('input[id="twotabsearchtextbox"]').type("iphone");
         cy.get('input[id="nav-search-submit-button"]').click();
    cy.url().should('include','iphone');88
  })
})
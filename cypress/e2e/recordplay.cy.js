describe('Record and Play', () => {
  it('Test1', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://www.youtube.com/');
    cy.title().should('contain','YouTube')
    cy.contains('Home').should('be.visible')
    cy.get('.ytSearchboxComponentInput').clear();
    cy.get('.ytSearchboxComponentInput').type('potato receipes');
    cy.get('.ytSearchboxComponentSearchButton > yt-icon > .yt-icon-shape > div').click();
      cy.contains('Wedding Style').should('be.visible')
    cy.get('.ytp-play-button').click({force:true});
    /* ==== End Cypress Studio ==== */
  })
})
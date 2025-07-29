//scenario 1
describe('cypress first test',()=>{
it('Navigation',()=>{
    cy.visit('/')
    cy.url().should('contain','admlucid')
    cy.title().should('eq','Home Page - Admlucid')

})
it('Login adm lucid',() =>{
    cy.Login("daphnemaria89@gmail.com","hbjbdbb");

})
})
   
//scenario 2
describe('cypress first test',()=>{
it('Navigation',()=>{
    cy.visit('/')
    cy.url().should('contain','admlucid')
    cy.title().should('eq','Home Page - Admlucid')

})
it('Login adm lucid',() =>{
    cy.Login("daphnemaria89@gmail.com","hbjbdbb");

})
})

//scenario 3
describe('cypress first test',()=>{
it('Navigation',()=>{
    cy.visit('/')
    cy.url().should('contain','admlucid')
    cy.title().should('eq','Home Page - Admlucid')

})
it('Login adm lucid',() =>{
    cy.Login("daphnemaria89@gmail.com","hbjbdbb");

})
})
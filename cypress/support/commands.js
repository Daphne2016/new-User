// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('Login',(email ,password)=>{
     cy.visit('/Identity/Account/Login')
     cy.get('#Input_Email').type(email)
     cy.get('#Input_Password').type(password)
     cy.get('#login-submit').click()
});
Cypress.Commands.add('LoginAsTester', ()=> {
          cy.visit('/Identity/Account/Login');
          cy.fixture('Tester.json').then((data) => {
               cy.get('#Input_Email').type(data.Email);
               cy.get('#Input_Password').type(data.Password);
          });

          cy.get('#login-submit').click();
     })
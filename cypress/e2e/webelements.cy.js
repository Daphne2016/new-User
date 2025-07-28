describe('Test area',() =>{
    it('web elements',()=>{
        cy.once('uncaught:exception',()=> false);
        cy.visit('https://admlucid.com/')
        cy.contains('Tests').click().should('be.visible')
        cy.contains('Web_Elements').click({force:true})
        cy.get('#Text1').clear().type("Welcome to Cypress testing")
    })
    it('Click on Text Area',()=>{
        cy.once('uncaught:exception',()=> false);
        cy.visit('https://admlucid.com/')
        cy.contains('Tests').click().should('be.visible')
        cy.contains('Web_Elements').click({force:true})
        cy.get('.TextArea3').clear().type("This is the Cypress testing");
    })
    it('Click Button1',()=>{
        cy.once('uncaught:exception',()=> false);
        cy.visit('https://admlucid.com/')
        cy.contains('Tests').click().should('be.visible')

        cy.contains('Web_Elements').click({force:true})
        cy.get('#Button1').click()
        
    })
    it('Click files',()=>{
        cy.once('uncaught:exception',()=> false);
        cy.visit('https://admlucid.com/')
        cy.contains('Tests').click()
        cy.contains('Web_Elements').click({force:true})
        cy.get('.File3').click();


})
})
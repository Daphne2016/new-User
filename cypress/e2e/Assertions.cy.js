describe('Test area',() =>{
    it('web elements',()=>{
        cy.once('uncaught:exception',()=> false);
        cy.visit('https://admlucid.com/')
        cy.contains('Tests').click().should('be.visible')
        cy.contains('Web_Elements').click({force:true})
        cy.get('h1').contains('Web Elements and Locators')


        if(cy.get('#Submit1').should('have.value','submit 1'))
            cy.get('#Submit1').click()

        if(cy.get('.Submit3').should('have.value','submit 3'))
            cy.get('.Submit3').click()
    })
    it('test the second option',()=>{
         cy.once('uncaught:exception',()=> false);
        cy.visit('https://admlucid.com/')
        cy.contains('Tests').click().should('be.visible')
        cy.contains('Golf_Course').click({force:true})
        cy.get('h1').contains('Golf Courses')
        cy.get('.select').find('option').should('have.length',11)
        cy.get('.btn').first().should('be.visible')
    })
    it('test the test page',()=>{
         cy.once('uncaught:exception',()=> false);
        cy.visit('https://admlucid.com/')
        cy.contains('Tests').click().should('be.visible')
        cy.contains('Web_Elements').click({force:true})
        cy.get('h1').contains('Web Elements and Locators')
        cy.get('h2').contains('CHILD CARE REGISTRATION')
        cy.get('input[value="girl"]').click()
            
          cy.get('h2').then(($element)=>{
        expect($element.text()).to.be.contains('Selenium Wait for Web Element');
    })
    
    })
})
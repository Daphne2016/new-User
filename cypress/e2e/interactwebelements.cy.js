describe('web elements interaction',()=>{
    it ('RadioButton',()=>{
        cy.once('uncaught:exception',()=>false)
        cy.visit("/")
        cy.contains('Tests').click().should('be.visible')
        cy.contains('Web_Elements').click({force:true})
        cy.get('#Radio1').click()


    })
     it ('Checkbox',()=>{
        cy.once('uncaught:exception',()=>false)
        cy.visit("/")
        cy.contains('Tests').click().should('be.visible')
        cy.contains('Web_Elements').click({force:true})
        cy.get('#Checkbox1').check()
        cy.get('#Checkbox1').should('be.checked')
        cy.get('#Checkbox1').uncheck()
        cy.get('#TextArea1').should('not.be.checked')

})
it ('fileupload',()=>{
        cy.once('uncaught:exception',()=>false)
        cy.visit("/")
        cy.contains('Tests').click().should('be.visible')
        cy.contains('Web_Elements').click({force:true})
        cy.get('input[name="File2"]').selectFile('cypress/fixtures/example.json')
})
it('Select',()=>{
         cy.once('uncaught:exception',()=> false);
        cy.visit('https://admlucid.com/')
        cy.contains('Tests').click().should('be.visible')
        cy.contains('Golf_Course').click({force:true})
        cy.get('.select').select('Mexico')
        cy.get('.select').should('have.value','Mexico')

})
it('Mouseover',()=>{
         cy.once('uncaught:exception',()=> false);
        cy.visit('https://admlucid.com/')
        cy.contains('Tests').click().should('be.visible')
        cy.contains('Golf_Course').click({force:true})
        cy.get('.select').trigger('Mouseover')
})
})
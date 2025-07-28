describe('cypress Test',()=> {
        beforeEach(() => {
            cy.visit('/')
        })
        it('select from cy.fixtures', () => {
            cy.once('uncaught:exception', () => false)
            cy.contains('Tests').click()
            cy.contains('Golf Courses').click({ force: true })
        })
            cy.fixture('country.json').then((data) => {
                cy.get('.select').select('Mexico')
                cy.get('select').should('have.value', 'Mexico')
                cy.get('.select').contains(data.Mexico)


            })

        
        it('login  using data in  json',() =>{
            cy.LoginAsTester()

        })
    })
describe('cypress selector',()=>{
    it('selector test',()=>{
        cy.visit('https://www.google.com/')
        cy.get('#APjFqb').then((element)=>{
            cy.log('text from google:' +element.text());
        })
        cy.get('.YmvwI').click();
        })
    })

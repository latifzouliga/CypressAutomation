/// <reference types="cypress"/>

describe('Find or get Elements by using different locators', () => {

    beforeEach(() => {
        cy.clearCookies;
        cy.visit('login');
    })

    it('Check different locators strategies', () => {

        //By CSS Selector
        cy.get('input[name="username"]').type('CydeoStudent') // every statement creates an object 
        // to be interacted, and next commmand makes operation to the object created at the previous statement
       

        // attribute name and value
        cy.get('[type="text"]').clear()
  
        // locate multiple Elements
        cy.get('input').each((item, index, list) => {

            // assert the length of the list is 2
            expect(list).to.have.length(2);
            expect(item).to.have.attr('type');

        })

        
    })


})
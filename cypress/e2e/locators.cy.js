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
  
        // tagName // locate multiple Elements
        cy.get('input').each((item, index, list) => {

            // explicit assertion
            // assert the length of the list is 2
            expect(list).to.have.length(2);
            expect(item).to.have.attr('type');

        })

        // locate by attribute name
        cy.get('[type]');

        // locate with class name
        cy.get('.btn.btn-primary');

        // locate by id
        cy.get('#wooden_spoon');

        // if we want to use text: no xpath in Cypress, but it still possible with a different approach
        cy.get('button').should('contain','Login').click();

        
    })

    it('Finding element by traveling through DOM', () => {
        // travel to find the login button: locate username box, go to parent form, then find login button
        cy.get('input[name="username"]').parents('form').find('button').should('contain','Login').click();


    })

    it.only('Check different types of assertions', () => {
        // Cypress itself bunbles assertions provided by Chai, Sinon and jQuery libraries

        // Should Assertion
        // locate login button with id and verify it has text login and class attribute value 'btn btn-primary'
        cy.get('#wooden_spoon')               // locating the element
        .should('contain','Login')            // assert element has a text 'Login'
        .and('have.class','btn btn-primary')  // assert element class attribute's value is 'btn btn-primary'

        // Expect Assertion
        cy.get('#wooden_spoon').then((buttonElement) => {             // locate button element and create an object
            expect(buttonElement).to.have.text('Login');              // assert element has the text 'Login'
            expect(buttonElement).to.have.class('btn btn-primary');   // assert element class attribute's value is 'btn btn-primary'
        })

    })

    


})

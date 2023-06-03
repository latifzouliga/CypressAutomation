/// <reference types="cypress" />

describe('Cypress webTable Tests',{baseUrl:'https://demoqa.com/'},() => {
    /**
     * If we need to nevigate to a URL other than the baseUrl, we can define it at describe block or in it block
     * if baseUrl is defined in decribe block, it is gonna affect all test cases
     * if baseUrl is defined in it block, it is gonna only affect the specific test case
     */

    beforeEach("Navigate to webTable page",() => {
        cy.clearCookies();
        cy.visit('webtables')
    })

    it('Check finding and editing a record', () => {
        // locate table body - then navigae through this element fo find Alden,
        // then update info with another name
        /**
         *  1. get me table body
         * 2. get me the row that contains Alden
         * 3. store it into a jQuery 
         */
        cy.get('.rt-tbody')               // get table body
        .contains('.rt-tr-group','Alden') // get the row that contains 'Alden'
        .then((row) => {
            // click on edit button for Alden record
            cy.wrap(row).find('[title="Edit"]').click();
            // change old data with new data
            cy.get('#firstName').clear().type('Latif')
            cy.get('#lastName').clear().type('Zouliga')
            cy.get('#submit').click();
            // from cypress prespective we are still inside row element
            // assert
            cy.wrap(row).find('.rt-td').eq(0).should('contain','Latif')
            cy.wrap(row).find('.rt-td').eq(1).should('contain','Zouliga')



        }) 
        
    })
})
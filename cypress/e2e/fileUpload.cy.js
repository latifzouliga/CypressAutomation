/// <reference types="cypress"/>

describe('Cypress File Upload Tests', () => {
    /**
     * In order to upload a file in cypress we need to install plugin
     * We wil run following command: 
     * npm install -dev cypress-file-upload
     * We need to import necessary command to our progect
     * in our support folder we have commands,js file: this file is a good place for putting uitility methods (functions)
     * add the following line:
     * import 'cypress-file-upload';
     * 
     * The file the needs to be uploaded should be in fixture folder
     */

    beforeEach('Navigate to upload page',() => {
        cy.clearCookies();
        cy.visit('upload')
    })

    it('Check Upload Action', () => {
        // choose file button
        cy.get('input#file-upload').attachFile('cover.jpeg');
        // click upload button
        cy.get('#file-submit').click();
        // assert that path message is displayed
        cy.get('#uploaded-files').then(() => {
            cy.contains('cover.jpeg').should('be.visible');
        })
    })



})


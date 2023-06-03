/// <reference types="cypress"/>

describe('Input Forms Tests', () => {
  beforeEach('Navigate to registration page', () => {
    cy.clearCookies;
    cy.visit('/registration_form');
  });

  it('Check different input box fields', () => {
    // fill the form
    cy.get('input[name="firstname').type('Mike');
    cy.get('input[name="lastname').type('Brown');
    cy.get('input[name="username').type('mikeBrown');
    /**
     * Math.randon(): creates a number between 0 and 1
     * We need to mupliply it by 900000 and add 100000 we a number between 100000 and 999999
     * Math.floor turns it from decimal to a whole number
     * 'formTest1234@cydeo.com'
     */
    const email = `form${Math.floor(100000 + Math.random() * 900000)}@cydeo.com`;
    cy.get('input[name="email').type(email); // email

    const passowrd = `form${Math.floor(100000 + Math.random() * 900000)}@cydeo`;
    cy.get('.has-error > .col-sm-5 > .form-control').type(passowrd); // password
    // cy.get(':nth-child(1) > label > input').click();                        // gender

    const phonNuber = `412-${Math.floor(100 + Math.random() * 900)}-${Math.floor(
      1000 + Math.random() * 9000
    )}`;
    cy.get(':nth-child(6) > .col-sm-5 > .form-control').type(phonNuber); // phone number

    cy.get(':nth-child(8) > .col-sm-5 > .form-control').type('08/10/1988'); // date of birth

    // cy.get(':nth-child(9) > .col-sm-5 > .form-control').click()    // departement/office
  });

 it('Check radio button actions', () => {
    // travelling through the element
    cy.get('.radio') // finds the whole box
      .find('[type="radio"]') // finds the radio buttons only
      .then((radio) => {
        // create an object of radio buttons (radio is just a variable to represent all 3 buttons)
        // get all radio buttons, then select the first one and verify that is checked
        cy.wrap(radio).first().check().should('be.checked'); // select the first button and select and assert
        /**
         * radio: is jQuery element, cy.wrap(radio) turns it into cypress Object so the we can use cypress function
         * first(): selects first element
         * check(): check it out
         * should(): verify whatever is provided as parameter 'be.checked'
         */

        // select the secont radio button
        // we get all bettons and select the second one using its index number
        // we verify if it is selected or checked and also verify the check mark is visible
        cy.wrap(radio).eq(1).check().should('be.checked');
        cy.get('[data-bv-icon-for="gender"]').should("be.visible");

        // verify the first radio button is not checked
        cy.wrap(radio).first().should('not.be.checked');
        // verify the third radio button is not checked
        cy.wrap(radio).eq(2).should('not.be.checked'); 

      });
  });

  it.skip('Check different checkbox actions', ()=> {
    //get all checkboxes, select Java and verify
    cy.get('[type="checkbox"]').then((checkbox) => {
      //cy.wrap(checkbox).eq(1).check().should('be.checked')//

      // uncheck Java
      //cy.wrap(checkbox).eq(1).uncheck().should('not.be.checked')

      // check each checkbox and verify and also uncheck each checkbox and verify
     for (let i = 0; i < checkbox.length; i++) {
        cy.wrap(checkbox).eq(i).check().should('be.checked')
        cy.wrap(checkbox).eq(i).uncheck().should('not.be.checked')
     }

     // verify the third checkbox has a value JavaScript abd tgeb check abd verfy
     cy.wrap(checkbox).eq(2)             // wrap elements and select third one
     .should('have.value', 'javascript') // verify the attr value
     .check().should('be.checked')       // and then check it

    })


  })

  it.skip('Ckeck selection of single option from a sellct dropdown', () => {
      // locate select dropdown menu
      cy.get('select[name="job_title"]').select("Scrum Master");
      //asset that dropdown has the correct text after selecting
      cy.get('select[name="job_title"]').should('have.value', 'Scrum Master');
  })

  it('Ckeck selection of all select dropdown options', () => {
      // we will provide our test data through fixtures folder as JSON object, then use that data to verify select values
      cy.fixture('departments').then((departments) => {
        // get all option in the menu, and then iterate through these option
        cy.get('select[name="department"] > option').each((option, index) => {
          // get each option text
          const optionText = option.text(); // get text of select option
          cy.log(index)
          cy.log('From select: '+optionText)   
          cy.log('From fixtures: '+departments[index])   
          
          // assertion
          cy.get('select[name="department"]').select(optionText)
          .should('have.value', option.val())
          //.should('have.text.eql', department[index])
          //.contains(departments[index])

          
        })
      })

  })



});

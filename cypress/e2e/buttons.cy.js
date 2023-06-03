/// <reference types="cypress"/>

describe('buttons', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.visit('multiple_buttons');
  });

  it('Check Different Button Action', () => {
    // select a button with text
    cy.contains('Button 2').should('be.visible').click();
    cy.contains('Clicked on button two!').should('be.visible');
  });

  // find elements with class attribute and create a list then click the third one
  // this function is locating 6 elements and clicking on the one with a given index number
  it('Get multiple elements and click the third one', () => {
    cy.get('.btn.btn-primary').then(($buttons) => {
      // $buttons is variable to represent all elements
      // In java List, list.get(index)
      // cy.wrap($buttons).contains('Button 3').click();           // click on element with text 'Button 3'
      cy.wrap($buttons).eq(2).click(); // click on element with index 2
      // assert the text is 'Clicked on button three!'
      cy.contains('Clicked on button three!').should('be.visible');
    });
  });

  // get all buttons with tagName, each method is creating a loop
  it('Get all elements', () => {
    cy.get('button').each((item, index, list) => {
      // assert length of the list, verify number of buttons
      expect(list).to.have.length(6);
      expect(item).to.have.attr('onclick');
    });
  });

  // I will get al button like previous approach, get only the item then check for text of each item,
  // if it is equal to Button 4, then click it
  // get all buttons with tagName, each method is creating a loop
  it.only('Get all elements', () => {
    cy.get('button').each((item) => {
      if (item.text() === 'Button 4') {
        cy.log(item.text()); // this command prints the text at the test console in the browser
        // item.click();         // can not use cypress click fuction on jQuery element
        cy.wrap(item).click(); // turning it into cypress element
        cy.contains('Clicked on button four!').should('be.visible');
      }
    });
  });

  // to run in --headless mode using chrome: npx cypress run headless -b chrome

  // how to install lintin
  // npm install eslint-config-airbnb -- save-dev
  // npm install eslint-config-prettier --save-dev
  // npm install eslint-plugin-chai-friendly --save-dev
  // npm install eslint-plugin-cypress --save-dev
  // npm install eslint-plugin-import --save-dev
  // npm install eslint-plugin-jsx-a11y --save-dev
  // npm install eslint-plugin-prettier --save-dev
  // npm install eslint-react --save-dev
  // npm install husky --save-dev
  // npm install prettier --save-dev
});

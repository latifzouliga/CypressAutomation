/// <reference types="cypress"/>

describe('Context: My first Test', () => {
  before(() => {
    // runs once before all test cases in this describe block, it is like beforeClass in testNG
  });

  beforeEach(() => {
    // runs once before each test case, it is like beforeMethod in testNG
    cy.clearCookies();
  });

  after(() => {
    // runs once after all test cases in this describe block, it is like afterClass in testNG
  });

  afterEach(() => {
    // runs once after each test case, similar to afterMethod in TestNG
  });

  it('Openning a web application', () => {
    cy.visit('/registration_form');
    // cy.get('.nav-link').click();
    // cy.get('.list-group > :nth-child(2) > a').click();
    // cy.get('.nav-link').click();
    // cy.get(':nth-child(7) > a').click();
    // cy.get('.nav-link').click();
  });

  it('Test 2', () => {
    expect(5 + 5).to.equal(10);
  });

  // skip this test case
  it.skip('Test 2', () => {
    expect(100).to.equal(101);
  });

  it('Test 4', () => {
    expect(true).to.equal(7 + 3 == '10');
  });

  // close this test case
  xit('test 5', () => {
    expect(false).to.equal(10 === '10');
  });
});

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('addUser', (user) => {

    cy.get('#firstName').type(user.name)
        cy.get('#lastName').type(user.lastname)
        cy.get('#username').type(user.username)
        cy.get('#password').type(user.password)
        cy.get('#confirmPassword').type(user.password)
        cy.get('[data-test="signup-submit"]').click()
})

Cypress.Commands.add('testId', (dataTestId) => {
    return cy.get(`[data-test="${dataTestId}"]`) 
})

Cypress.Commands.add('testIdEndingWith', (dataTestId) => {
    return cy.get(`[data-test$="${dataTestId}"]`) 
})

Cypress.Commands.add('getByTestId', (dataTestId) => {
    return cy.get(`[data-test*="${dataTestId}"]`)

})

Cypress.Commands.add('loginUser', (user) => {//passarle el user
    cy.get('input').first().type(user.username)//Giovanna74
    cy.get('#password').type(user.password)//s3cret
    cy.testId('signin-remember-me').click()
    cy.testId('signin-submit').click()  
 })



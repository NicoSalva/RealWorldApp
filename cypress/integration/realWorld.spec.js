/// <reference types="cypress" />

import { User } from "../classes/user"

describe('Test Complete Real World App', () => {
    
    describe('Main Page', () => {

        before('', () => {
            cy.visit('/')    
        })       
    
        it('Visit the page', () => {
            cy.url().should('exist')            
        })

        
        it('Dont have user', () => {
            cy.contains("Don't have an account? Sign Up").should('be.visible')
            cy.testId('signup')
            .click()
            .url().should('include','/signup')        
            cy.get('h1').should('have.text','Sign Up')
    
            cy.addUser(new User('Nico','Salva','NicoSalva','1234'))
    
        })
    
        it('Wrong Login', () => {
            cy.get('input').first().type('totora')
            cy.get('#password').type('totora')
            cy.testId('signin-submit').click()
            cy.contains('Username or password is invalid').should('have.text', 'Username or password is invalid')  
    
        })
        
        it('The login page is correct', () => {
            cy.contains('Sign in').should('exist')
            const Giova = new User('Carla','Patricia','Giovanna74','s3cret') 
            cy.loginUser(Giova)         
        })
    })
})
        




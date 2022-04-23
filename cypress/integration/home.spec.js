/// <reference types="cypress" />

import { User } from "../classes/user"

describe('User Page', () => { 

        before('', () => {
         cy.visit('/')
         const Giova = new User('Carla','Patricia','Giovanna74','s3cret')             
        cy.loginUser(Giova)     
      })
      
      it('The profile has the content', () => {

        
        cy.testId('main').should('be.visible')

        //Check sidenav

        
        cy.testId('sidenav').within(() => { 
           cy.getByTestId('sidenav').should('have.length',8) //Let's count that we have 8 elements
           
           cy.testId('sidenav-home').should('be.visible')
           cy.testId('sidenav-user-settings').should('be.visible').and('have.text', 'My Account')
           cy.testId('sidenav-bankaccounts').should('be.visible').and('have.text', 'Bank Accounts')
           cy.testId('sidenav-notifications').should('be.visible').and('have.text', 'Notifications')
           cy.testId('sidenav-signout').should('be.visible').and('have.text', 'Logout')
        })       
        
        
        //Check centralnav
        cy.testId('nav-transaction-tabs').within(() => {
           cy.testIdEndingWith('-tab').should('have.length',3)  
           
           cy.testId('nav-public-tab').should('be.visible')
        .should('have.text', 'Everyone')

        cy.testId('nav-contacts-tab').should('be.visible') 
        .should('have.text', 'Friends')

        cy.testId('nav-personal-tab').should('be.visible') 
        .should('have.text', 'Mine')
       })
   })

   it('Check conteints from EVERYONE', () => {

      cy.contains('Everyone').click()
      
      cy.testId('transaction-list')
      .within( () => {
         cy.getByTestId('transaction').should('be.visible')
         
         

      })
      
   })

   
})
/// <reference types="cypress" />

describe('verify the shadowdom elements', function () {
    Cypress.on('uncaught:exception', (err, runnable) => {
       // returning false here prevents Cypress from
        // failing the test
        return false
    })

    it('firstway to get elements in shadowdom', function () {
        cy.visit('https://selectorshub.com/xpath-practice-page/')
        //cy.get('#pizza').should('be.visible') //cant find in this way 

        //2nd way
        cy.get('#userName').shadow().find('#app2').shadow().find('#pizza').type("snehal")
        cy.wait(30000) /// wait for excecute

        cy.get('#pizza', {includeShadowDom:true}).should('be.visible').type("snehalk")



    })
})
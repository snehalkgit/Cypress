/// <reference types="cypress" />

describe('verify the contact us form',function(){
    beforeEach(function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    })

    it('verify the contact us form with valid data',function(){
        cy.formDetails("snehal","kamble","snehalkamble1564@gmail.com","im learning js")
        cy.get('input[type = "submit"]').click()
        cy.get('h1').should('be.visible').and('have.text','Thank You for your Message!')

    
    })
    it('verify the contact us form with invalid data',function(){
        cy.formDetails("snehal","kamble","snehalkamble1564gmail.com","im learning js")
        cy.get('input[type = "submit"]').click()
        cy.get('body').should('contain',"Invalid")

    })
    it('verify the contactus form with reset button',function(){
        cy.formDetails("snehal","kamble","snehalkamble1564gmail.com","im learning js")
        cy.get('input[type = "reset"]').click()
        cy.get('input[name="first_name"]').should('have.text',"")
        cy.get('input[name="last_name"]').should('have.text',"")
        cy.get('input[name="email"]').should('have.text',"")
        cy.get('textarea[name="message"]').should('have.text',"")
    })
})
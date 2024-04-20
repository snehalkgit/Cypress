/// <reference types="cypress" />

describe('traverse method ', function () {

    beforeEach(function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')


    })

    it('to get all previous siblings dom elememts within elements, use the prevall() command', function () {
        cy.get('#milk').prevAll().should('have.length', 2)
    })
    it('to get all the next sibilngs dom elements within elements ,use the .nextall() command', function () {
        cy.get('#coffee').nextAll().should('have.length', 4)
    })
    it('to get all of the siblings dom elements , use the .siblings( command', function () {
        cy.get('#coffee').siblings().should('have.length', 4)
    })
    // children() , first() , last() , eq() , prev() , next() , nextAll() , prevAll() , sibling()

    it('to get dom element that matcch a specific selector , use the .filter() command ', function () {
        cy.get('.traversal-button-states').children().filter('.disabled').should('have.text', "Warning")
    })

    it('to remove dom elements from the set of elements, use the .not() command',function(){
        cy.get('.traversal-button-states').children().not('.disabled').should('have.length',3)
    })
    it('to get parent dom elment of elements of the selector,use the .find()command',function(){
        cy.get('.disabled').parent().should('have.attr','class','traversal-button-states')
    })
    it.skip('To get descendant DOM elements of the selector, use the .find() command.',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('#contact_me').find('input[name="first_name"]').type('chinmay')
    })
    
    it('to get all the next sibling elemets in dom elements within elements untill another elements,use the nextall() command ',function(){
        cy.get('#coffee').nextUntil('#sugar').should('have.length',3)
    })

    it('to get all previous sibiling on dom elememts within the elements untill other elements use the .prevuntill() command',function(){
        cy.get('#sugar').prevUntil('#coffee').should('have.length','3')
        //cy.get('#sugar').prevUntil('#coffee').should('be.greaterThan','2')
    })
    it('to get parentrs dom elemets of elements , use the . parents() command',function(){
        cy.get('#milk').parents().should('have.class','thumbnail')
    })
})

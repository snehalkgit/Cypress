/// <reference types="cypress" />

describe('verify the assertion',function(){
    beforeEach(function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    })
    it('implicit assertion',function(){
        cy.get('#tea').should('have.text','Tea')
        cy.get('#tea').should('have.attr','id','tea')
        cy.get('#tea').then(function(el){
            cy.log(el) //elem
            cy.log(el.text())
            //explicit assertion
            expect(el.text()).eq('Tea')
        })
        //promises

    })
    it('loop through elements',function(){
        //array
        let expctedarray = ["Coffee","Tea","Milk","Espresso","Sugar"]
        cy.get('.traversal-drinks-list').children().each(function(el,index){
            cy.log(el.text())
            expect (el.text()).to.eq(expctedarray[index])
        })
    })
})



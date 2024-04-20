/// <reference types="cypress" />

describe('learn basic command',function(){
    it ('how to get title',function(){
        cy.visit('https://www.flipkart.com/')
        cy.title().should('contain','Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!')
    })

    it('how to get elements in cypress',function(){
 cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
 ///to get one element
 cy.get('h2[name="contactme"]').should('have.attr','class','section_header')
 cy.contains('CONTACT US').should('have.attr','name','contactme')
//to get multiple element

cy.get('input[name]').should('have.length',3)
///to get elemets inside a node

    })


    it.only('how to get elements in cypress',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.wait(2000)
        cy.log('2 second wait over')
        cy.get('label').contains('Option 1').should('be.visible')
        cy.log('assertion done')
        cy.reload()
        cy.log('reload done')
    })

    it.skip('how to log on cypress test runner',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.log('before radio button')
        //one element

        cy.get('input[value = "green"]').click()
        cy.contains('Green').should('be.visible')
        cy.get('label').contains('Option 4').should('be.visible')
        cy.contains('label',"Option 3").should('be.visible')
        cy.log('after radio button')
    })

})
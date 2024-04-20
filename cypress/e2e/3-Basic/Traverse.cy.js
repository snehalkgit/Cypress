/// <reference types="cypress" />

describe('traverse methos',function(){
    //sibling methods

    it('To get the first DOM element within elements, use the .first() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().first().should('have.text','Fruits')
    })

    })
    it('to get the DOM elemt within elements , use the .last() command',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().last().should('have.text','Lentils')
    })
    it('To get a DOM element at a specific index, use the .eq() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().eq(2).should('have.text',"Banana")
    })
    it('To get children of DOM elements, use the .children() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().should('have.length',5)
    }) 
    it('To get the previous sibling DOM element within elements, use the .prev() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html') 
        cy.get('#milk').prev().should('have.text',"Tea")
    })
    it('To get the previous sibling DOM elements within element, use the .next() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html') 
        cy.get('#milk').next().should('have.text',"Espresso")
    })
    it('To get all previous sibling DOM elements within elements, use the .prevAll() command',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html') 
        cy.get('#milk').prevAll().should('have.length',2)
     })
     it('To get DOM element(s) from the set of elements, use the .filter() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
       
        cy.get('.traversal-button-states').children().filter('.disabled').should('have.text',"Warning")
     })

     it('To remove DOM element(s) from the set of elements, use the .not() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().not('.disabled').should('have.length',3)
     })

     it('To get parent DOM element of elements, use the .parent() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.disabled').parent().should('have.attr','class','traversal-button-states')
     })
    








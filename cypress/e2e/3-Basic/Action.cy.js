/// <reference types="cypress" />

describe('Mouse action',function(){
   it('Drag and Drop',function(){
      cy.visit('https://webdriveruniversity.com/Actions/index.html')
      cy.get('#draggable').trigger('mousedown',{which:1})
      cy.get('#droppable').trigger('mousemove',{which:1})
      .trigger('mouseup',{force:true})
      cy.get('#droppable').should('contain',"Dropped!")
    })

    it('Right click',function(){
      cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
      cy.get('.context-menu-one').first().rightclick()
      //cy.get('.context-menu-one').first().trigger('contextmenu')
      cy.get('body > ul > li.context-menu-item.context-menu-icon.context-menu-icon-cut > span').should('be.visible')
    })
    
    it('Double click',function(){
      cy.visit('https://webdriveruniversity.com/Actions/index.html')
      //cy.get('#double-click').trigger('dblclick').should('have.class','double')
      cy.get('#double-click').dblclick().should('have.class','double')
    })

    it('mouse Over',function(){
      cy.visit('https://demo.opencart.com/')
      cy.get('#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a').should('not.be.visible')
      cy.get('#narbar-menu > ul > li:nth-child(1) > a').trigger('mouseover').click()
      cy.get('#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a').should('be.visible')
    })
    it('scrollInview',function(){
      cy.visit('https://webdriveruniversity.com/')
      cy.get('#popup-alerts').scrollIntoView({duration:3000})
    })
    it('click and hold',function(){
      cy.visit('https://webdriveruniversity.com/Actions/index.html')
      cy.get('#click-box').find('p').should('have.text','Click and Hold!')
      cy.get('#click-box').trigger('mousedown',{button:0})
      cy.get('#click-box').should('contain','Well done')
      cy.get('#click-box').trigger('mouseup',{button:0})
      cy.get('#click-box').should('contain','Dont release me!!!')
    })

    it('Autosuggestive drop down',function(){
      cy.visit('https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')      
      cy.get('#myInput').type('B')
      cy.get('#myInputautocomplete-list').children().each(function(el){
         if(el.text().includes('Bacon')){
            cy.wrap(el).click()
         }
      })
      cy.get('#submit-button').click()
      cy.url().should('contain',"Bacon")

    })
    
   })

 

   



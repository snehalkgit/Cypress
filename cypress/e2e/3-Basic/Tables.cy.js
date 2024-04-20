/// <reference types="cypress" />


describe('table in cypress',function(){
    function calculateage(id,expectedtotal){
        let sum = 0
        cy.get(`#t0${id}`).find('tr').each(function(row){
            cy.log(row.find('td').last().text())
            sum = sum+Number(row.find('td').last().text())
        }).then(function(){
            cy.log(sum)
            expect(sum).to.eq(expectedtotal)
        })
        
    }
    it('verify the sum of total columns- table-1',function(){
        let sum = 0
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#t01').find('tr').each(function(row){
            cy.log(row.find('tr').last().text())
            sum = sum + Number(row.find('td').last().text())
        })
        .then(function(){
            cy.log(sum)
            expect(sum).to.eq(159)
        })
})
it('verify the sum of total columns- table-1',function(){
    let sum = 0
    cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    cy.get('#t02').find('tr').each(function(row){
        cy.log(row.find('tr').last().text())
        sum = sum + Number(row.find('td').last().text())
    })
    .then(function(){
        cy.log(sum)
        expect(sum).to.eq(163)
    })
})
it('verify the sum of table columns - table 1 using function',function(){
      cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
      calculateage(1,159)
})
it('verify the sum of table columns - table2 using function',function(){
    //let sum = 0
    cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    calculateage(2,163)

})
})
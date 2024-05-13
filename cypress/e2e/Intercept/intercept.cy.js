/// <reference types ="cypress"/>

describe('intercept one in cypress', function () {
    it('Testcase 1-', function () {
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait(4000)
        cy.get('.network-comment').should('contain', 'laudantium enim quasi est quidem magnam voluptate')

    })
    it('testcase - one by intercept', function () {
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as('getcomment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getcomment').then(function (info) {
            cy.log(info)
            expect(info.response.statusCode).to.eq(200)
            cy.get('.network-comment').should('contain', 'laudantium enim quasi est quidem magnam voluptate')
        })

    })
    it('verify the testcase 2', function () {
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as('getcomment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getcomment').then(function(info) {
            cy.log(info)
            expect(info.response.statusCode).to.eq(200)
            cy.get('.network-comment').should('have.text', info.response.body.body)
           // cy.get('.network-comment').should('be.visibile')

        })
    })
    it('Testcase three',function(){
     let text = undefined
        cy.request({
            url:"https://jsonplaceholder.cypress.io/comments/1",
            method:"GET"
        })
        .then(function(info){
        text = info.body.body
        })
        .then(function(){
        cy.visit('https://example.cypress.io/commands/network-requests')
         cy.contains('Get Comment').click()
           cy.get('.network-comment').should('have.text',text)

        })
    })
})



/// <reference types ="cypress"/>

describe('intercept',function(){
    it('wait with cy.intercept',function(){
        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as('getcomment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getcomment')
        cy.get('.network-comment').should('contain',"laudantium")

    })


it('verify wait with cy.intercept and data mapping',function(){
    cy.intercept({
        url:"https://jsonplaceholder.cypress.io/comments/1",
        method:"GET"
    }).as('getcomment')
    cy.visit('https://example.cypress.io/commands/network-requests')
    cy.contains('Get Comment').click()
    cy.wait('@getcomment').then(function({response,request}){
        cy.log(response.body.body)
        cy.get('.network-comment').should('have.text',response.body.body)

    })

})
it('verify wait with cy.intercept and stub network with mock',function(){
    cy.intercept({
        url:"https://jsonplaceholder.cypress.io/comments/1",
        method:"GET"
    },
    {body: {
        "postId": 1,
        "id": 2,
        "name": "sneha",
        "email": "snehalkamble@1234gmail.com",
        "body": "snehal kamble"
    }

    }).as('getcomment')
    cy.visit('https://example.cypress.io/commands/network-requests')
    cy.contains('Get Comment').click()
    cy.wait('@getcomment').then(function({response,request}){
        cy.log(response.body.email)
        cy.log(response.body)
        cy.get('.network-comment').should('have.text',response.body.body)
    })
})

})
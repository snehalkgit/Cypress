/// <reference types="cypress" />

describe('verify the contactus form', function () {

    // 1st way by object

    let info = {
        firstName: "snehal",
        lastName: "kamble",
        email: "snehalkmable1564@gmail1.com",
        comment: "I am learning js"
    }

    it('verify fixture file', function () {
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('input[name="first_name"]').type(info.firstName)
        cy.get('input[name="last_name"]').type(info.lastName)
        cy.get('input[name="email"]').type(info.email)
        cy.get('textarea[name="message"]').type(info.comment)

    })

    it('verify fixture in 2nd way', function () {
        cy.fixture('example3.json').then(function (info) {

            cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
            cy.get('input[name="first_name"]').type(info.firstName)
            cy.get('input[name="last_name"]').type(info.lastName)
            cy.get('input[name="email"]').type(info.email)
            cy.get('textarea[name="message"]').type(info.msg)
        })
    })


})
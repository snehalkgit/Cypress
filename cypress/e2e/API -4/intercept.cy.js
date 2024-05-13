/// <reference types ="cypress"/>

describe('verify GET,PUT POST DELETE request', function () {
    it('verify the GET request', function () {
        let user = "Michael"
        let flag = false
        cy.request({
            url: "https://reqres.in/api/users?page=2",
            method: 'GET'
        }).then(function (res) {
            cy.log(res)
            expect(res.body.data.length).to.eq(res.body.per_page)
            expect(res.body.data[0]).to.have.keys(["id", "email", "first_name", "last_name", "avatar"])
            expect(res.duration).to.lte(400)
            res.body.data.forEach(element => {
                expect(element.id).not.have.null
                expect(element.first_name).not.have.null
                expect(element.last_name).not.have.null
                expect(element.email).not.have.null
                expect(element.avatar).not.have.null

            });
            res.body.data.forEach(el => {
                if (el.first_name == user) {
                    flag = true
                }
            })
        }).then(function() {
            expect(flag).to.eq(true)
        })
    })
    it('verify POST request', function () {
        let userData = {
            "name": "snehal",
            "job": "Automation tester"
        }
        cy.request({
            url: 'https://reqres.in/api/users',
            method: "POST",
            body: userData
        }).then(function (res) {
            cy.log(res)
            expect(res.status).to.eq(201)
            expect(res.statusText).to.eq("Created")
            expect(res.body).to.have.keys(['createdAt', 'id', 'job', 'name'])
            expect(res.body.name).to.eq(userData.name)
            expect(res.body.job).to.eq(userData.job)
        })

    })

    it('verify PUT request', function () {
        let updateUD = {
            "name": "snehal",
            "job": "tester"
        }
        cy.request({
            url: "https://reqres.in/api/users/2",
            method: "PUT",
            body: updateUD
        }).then(function (res) {
            cy.log(res)
            expect(res.body.name).to.eq(updateUD.name)
            expect(res.body.job).to.eq(updateUD.job)
            expect(res.body).to.have.keys(['updatedAt', 'job', 'name'])
            expect(res.body.name).not.have.null
            expect(res.body.job).not.have.null
            expect(res.body.updatedAt).not.have.null
        })
    })

    it('verify DELETE request', function () {
        cy.request({
            url: 'https://reqres.in/api/users/2',
            method: "DELETE"
        }).then(function (res) {
            cy.log(res)
            expect(res.status).to.eq(204)
            expect(res.statusText).to.eq("No Content")
            expect(res.body).to.eq("")
        })
    })
})	



/// <reference types ="cypress"/>

describe('list of users', function () {

    let token = `4acf0dda2b264f207bd938e597ac2f9ba271c0b1fd6583ccdd7d910688cc68e5`
    let id = undefined


    it('list of user', function () {
        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                "Authorization": "Bearer 4acf0dda2b264f207bd938e597ac2f9ba271c0b1fd6583ccdd7d910688cc68e5"
            }
        }).then(function (response) {
            cy.log(response)
            expect(response.status).to.eq(200)
            expect(response.statusText).to.eq("OK")
            expect(response.body[0].id).to.eq(6910715)
        })
    })


    // create -------->  id ---------> updateuser --------> delete

    it('create update n delet user', function () {

        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            body: {
                name: "Tenali Ramakrishna",
                gender: "male",
                email: `tenali.ramakrishna@15${Math.floor(Math.random() * 10000) + 1}.com`,
                status: "active"
            },
            headers: {
                "Authorization": `Bearer ${token}`
            }

        })
            .then(function (response) {
                cy.log(response)
                expect(response.status).to.eq(201)
                cy.log(response.body.id)
                id = response.body.id
            })
            .then(function () {
                cy.request({
                    method: "PUT",
                    url: `https://gorest.co.in/public/v2/users/${id}`,
                    body: {
                        name: "Tenali Ramakrishna",
                        email: `tenali.ramakrishna@15${Math.floor(Math.random() * 10000) + 1}.com`,
                        status: "active"
                    },
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }

                })
                    .then(function (response) {
                        expect(response.status).to.eq(200)
                    })
                    .then(function () {
                        cy.request({
                            method: "DELETE",
                            url: `https://gorest.co.in/public/v2/users/${id}`,
                            headers: {
                                "Authorization": `Bearer ${token}`
                            }

                        })
                            .then(function (response) {
                                expect(response.status).to.eq(204)
                            })

                    })
            })
    })







})
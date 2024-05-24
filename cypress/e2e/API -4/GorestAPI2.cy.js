import payload from"../../fixtures/example3.json"
/// <reference types ="cypress"/>



describe('API testing for go rest api -E2E',function(){
let token =`4acf0dda2b264f207bd938e597ac2f9ba271c0b1fd6583ccdd7d910688cc68e5`
payload.post.email=`snehalkmable55${Math.floor(Math.random() * 1000+1)}@gmail.com`

it('post method by using payload by fixture',function(){
    cy.log(payload.post)
    cy.request({
        method:"post",
        url:"https://gorest.co.in/public/v2/users",
        body:payload.post,
        headers:{
            "Authorization": `Bearer ${token}`
        }

    }).then(function(response){
        cy.log(response)
        expect(response.body.name).to.eq("snehal")
    })
})
})
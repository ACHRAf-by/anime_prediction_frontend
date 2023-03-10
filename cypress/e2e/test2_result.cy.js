describe('On click and result test', () => {
  
  before(() =>{
    cy.visit("https://anime-frontend.azurewebsites.net")

    cy.get('[data-cy="title-field"]').type('One Piece')
    cy.get('[data-cy="type-field"]').click()
    cy.contains('TV').click()
    cy.get('[data-cy="source-field"]').click()
    cy.contains('Manga').click()
    cy.get('[data-cy="producer-field"]').type('TV TOKYO')
    cy.get('[data-cy="studio-field"]').type('Studio Ghibli')
    cy.get('[data-cy="synopsis-field"]').type('Description for One Piece')
    cy.get('[data-cy="gender-field"]').click()
    cy.get('[data-cy="checkbox-field-Hentai"] [type="checkbox"]').check()

  })

  
  it('Test button', () => {    
  
    cy.intercept('POST', 'https://anime-backend.azurewebsites.net/api/prediction').as('postRequest')

    cy.get('[data-cy="mui-button"]').click()
       cy.wait('@postRequest').then((interception) => {
        expect(interception.request.body).to.deep.equal({
          Title: 'One Piece',
          Gender: ['Hentai'],
          Synopsis: 'Description for One Piece',
          Type: "TV",
          Producer: 'TV TOKYO',
          Studio: 'Studio Ghibli',
          Source: 'Manga'
        })
        expect(interception.response.statusCode).to.eq(200)
        cy.log(interception.response.body)
  })
})

})
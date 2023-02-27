describe('On click and result test', () => {
  
  before(() =>{
    cy.visit("https://anime-frontend.azurewebsites.net")

    cy.get('[data-cy="title-field"]').type('Achraf')
    cy.get('[data-cy="producer-field"]').type('TV TOKYO')
    cy.get('[data-cy="studio-field"]').type('Studio Ghibli')
    cy.get('[data-cy="description-field"]').type('Description for One Piece')
    cy.get('[data-cy="gender-field"]').click()
    cy.get('[data-cy="checkbox-field-Hentai"] [type="checkbox"]').check()

  })

  
  it('Test button', () => {    
  
    cy.intercept('POST', 'https://anime-backend.azurewebsites.net/api/prediction').as('postRequest')

    cy.get('[data-cy="mui-button"]').click()
       cy.wait('@postRequest').then((interception) => {
        expect(interception.request.body).to.deep.equal({
          title: 'Achraf',
          gender: ['Hentai'],
          description: 'Description for One Piece',
          type: 0,
          producer: 'TV TOKYO',
          studio: 'Studio Ghibli',
        })
        expect(interception.response.statusCode).to.eq(200)
        cy.log(interception.response.body)
  })
})

})
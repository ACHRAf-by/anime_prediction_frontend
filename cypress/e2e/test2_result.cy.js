describe('On click and result test', () => {
  
  before(() =>{
    cy.visit("http://localhost:3000")

    cy.get('[data-cy="title-field"]').type('Achraf')
    cy.get('[data-cy="producer-field"]').type('TV TOKYO')
    cy.get('[data-cy="studio-field"]').type('Studio Ghibli')
    cy.get('[data-cy="description-field"]').type('Description for One Piece')
  
  })


  
  it('Test button', () => {    
  
    cy.intercept('POST', 'http:///anime-backend.azurewebsites.net/api/prediction').as('postRequest')

    cy.get('[data-cy="mui-button"]').click()
  /*  .then(() => {
       cy.wait('@postRequest').then((interception) => {
        expect(interception.request.body).to.deep.equal({
          title: 'Achraf',
          gender: [''],
          description: 'Description for One Piece',
          type: 0,
          producer: 'TV TOKYO',
          studio: 'Studio Ghibli',
        })
        expect(interception.response.statusCode).to.eq(200)
        //expect(interception.response.body).to.have.property('result', 'success')
      })*/
  })
})
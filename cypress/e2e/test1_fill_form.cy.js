import { wait } from "@testing-library/user-event/dist/utils"

describe('End-To-End Anime Rating Test', () => {

  it('Visit our website', () =>{
    cy.viewport(1920, 1080) // set viewport size to 1920x1080
    cy.visit("http://localhost:3000")
  })

  it('Check Title text Field', () => {

    cy.visit('http://localhost:3000')
    cy.get('[data-cy="title-field"]').type('Achraf')
    cy.wait(2000);

  })

  it('Check Serie type', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="type-field"]').click()
    cy.wait(2000);
  })

  it('Check Movie type', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="type-field"]').click()
    cy.wait(2000);
  })

  it('Check Producer Field', () => {

    cy.visit('http://localhost:3000')
    cy.get('[data-cy="producer-field"]').type('TV TOKYO')
    cy.wait(2000);
  })

  it('Check Studio Field', () => {

    cy.visit('http://localhost:3000')
    cy.get('[data-cy="studio-field"]').type('Studio Ghibli')
    cy.wait(2000);
  })

  it('Should select multiple genders and verify the value', () => {
    cy.visit('http://localhost:3000')

    cy.get('[data-cy="gender-field"]').click()
    cy.get('[data-cy="checkbox-field-Action"] [type="checkbox"]').check()
    cy.wait(2000);
    cy.get('[data-cy="checkbox-field-Adventure"] [type="checkbox"]').check()
    cy.wait(2000);
  })

  it('Check Description Field', () => {

    cy.visit('http://localhost:3000')
    cy.get('[data-cy="description-field"]').type('Description for One Piece')
    cy.get('[data-cy="description-field"]').should('have.text', 'Description for One Piece')    
  })

})
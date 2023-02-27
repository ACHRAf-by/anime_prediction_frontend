import { wait } from "@testing-library/user-event/dist/utils"

describe('End-To-End Anime Rating Test', () => {

  it('Visit our website', () =>{
    cy.viewport(1920, 1080) // set viewport size to 1920x1080
    cy.visit("https://anime-frontend.azurewebsites.net")
  })

  it('Check Title text Field', () => {

    cy.visit('https://anime-frontend.azurewebsites.net')
    cy.get('[data-cy="title-field"]').type('Achraf')
    cy.wait(2000);

  })

  it('Check Serie type : TV', () => {
    cy.visit('https://anime-frontend.azurewebsites.net')
    cy.get('[data-cy="type-field"]').click()
    cy.contains('TV').click()
    cy.wait(2000);
  })

  it('Check source type : Manga', () => {
    cy.visit('https://anime-frontend.azurewebsites.net')
    cy.get('[data-cy="source-field"]').click()
    cy.contains('Manga').click()
    cy.wait(2000);
  })

  it('Check Producer Field', () => {

    cy.visit('https://anime-frontend.azurewebsites.net')
    cy.get('[data-cy="producer-field"]').type('TV TOKYO')
    cy.wait(2000);
  })

  it('Check Studio Field', () => {

    cy.visit('https://anime-frontend.azurewebsites.net/')
    cy.get('[data-cy="studio-field"]').type('Studio Ghibli')
    cy.wait(2000);
  })

  it('Should select multiple genders and verify the value', () => {
    cy.visit('https://anime-frontend.azurewebsites.net/')

    cy.get('[data-cy="gender-field"]').click()
    cy.get('[data-cy="checkbox-field-Action"] [type="checkbox"]').check()
    cy.wait(2000);
    cy.get('[data-cy="checkbox-field-Sports"] [type="checkbox"]').check()
    cy.wait(2000);
  })

  it('Check Description Field', () => {

    cy.visit('https://anime-frontend.azurewebsites.net')
    cy.get('[data-cy="synopsis-field"]').type('Description for One Piece')
    cy.get('[data-cy="synopsis-field"]').should('have.text', 'Description for One Piece')    
  })

})
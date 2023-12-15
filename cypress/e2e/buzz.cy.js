import { faker } from '@faker-js/faker'

describe('Dashboard', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.login()
      cy.visit('/buzz/viewBuzz')
    })
  
    it('Post successfully', () => {
      const postText = faker.word.words(5)

      cy.post(postText)
      
      cy.get(':nth-child(1) > .oxd-sheet > :nth-child(2) > .orangehrm-buzz-post-body > .orangehrm-buzz-post-body-text')
        .should('have.text', postText)
    })
  })
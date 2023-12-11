describe('Dashboard', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login()
    cy.visit('/dashboard/index')
  })

  it('Access Time page', () => {
    cy.get('.orangehrm-attendance-card-bar > .oxd-icon-button > .oxd-icon')
      .click()

    cy.url()
      .should('be.equal', `${Cypress.config('baseUrl')}/attendance/punchOut`)
  })
})
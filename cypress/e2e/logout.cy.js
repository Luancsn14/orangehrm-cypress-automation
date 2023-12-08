describe('Logout', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login()
  })

  it('Successfully', () => {
    cy.logout()

    cy.url()
      .should('be.equal', `${Cypress.config('baseUrl')}/auth/login`)
  })
})
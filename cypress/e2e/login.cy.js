describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })
    it('Successfully', () => {
    const user = Cypress.env('user_name')
    const password = Cypress.env('user_password')

    cy.login(user, password)

    cy.get('.oxd-topbar-header-userarea')
      .should('be.visible')
  })
})
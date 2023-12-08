describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Successfully', () => {
    cy.login()

    cy.get('.oxd-topbar-header-userarea')
      .should('be.visible')
  })
})
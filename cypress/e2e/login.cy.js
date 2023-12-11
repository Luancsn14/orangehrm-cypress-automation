describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  
  it('Successfully', () => {
    cy.login()

    cy.get('.oxd-topbar-header-userarea')
      .should('be.visible')
  })

  it('Empty fields', () => {
    cy.visit('/')

    cy.get('button[type="submit"]')
      .click()

    cy.get(':nth-child(2) > .oxd-input-group > .oxd-text')
      .should('contain', 'Required')
    cy.get(':nth-child(3) > .oxd-input-group > .oxd-text')
      .should('contain', 'Required')
  })

  it('Invalid credentials', () => {
    cy.get('input[name="username"]')
      .type('abc')
    cy.get('input[type="password"]')
      .type('123')

    cy.get('button[type="submit"]')
      .click()

    cy.get('.oxd-alert-content > .oxd-text')
      .should('contain', 'Invalid credentials')
  })
})
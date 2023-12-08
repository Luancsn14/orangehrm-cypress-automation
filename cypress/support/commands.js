Cypress.Commands.add('login', (user, password) => {
    cy.get('input[name="username"]')
      .type(user)
    cy.get('input[type="password"]')
      .type(password)

    cy.get('button[type="submit"]')
      .click()
})

Cypress.Commands.add('login', () => {
  const user = Cypress.env('user_name')
  const password = Cypress.env('user_password')

    cy.get('input[name="username"]')
      .type(user)
    cy.get('input[type="password"]')
      .type(password)

    cy.get('button[type="submit"]')
      .click()
})

Cypress.Commands.add('logout', () => {
  cy.get('.oxd-topbar-header-userarea')
    .click()
  cy.get('.oxd-userdropdown-link')
    .contains('Logout')
    .click()
})

Cypress.Commands.add('post', (postText) => {
  cy.intercept(
    'GET',
    '**/feed?limit=*',
  ).as('getPost')  

  cy.get('.oxd-buzz-post-input')
    .type(postText)

  cy.get('.oxd-buzz-post-slot > .oxd-button')
    .click() 

  cy.wait('@getPost')
})
describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#username').type('thiagocascaes')
    cy.get('#password').type('pass123456789')
    cy.get('[data-test="signin-submit"]').click()
  })
})

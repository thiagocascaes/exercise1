describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#username').type('thiagocascaes')
    cy.get('#password').type('password123')
    cy.get('[data-test="signin-submit"]').click()
  })
})

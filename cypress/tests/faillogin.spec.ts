describe('Tentar fazer login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
        cy.visit('http://localhost:3000/')
    cy.get('#username').type('thiag0cascaes')
    cy.get('#password').type('password123')
    cy.get('[data-test="signin-submit"]').click()
  });
});
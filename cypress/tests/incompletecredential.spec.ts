describe('Tentar registrar um novo usuário com informações incompletas', () => {
  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
        cy.visit('http://localhost:3000/')
        cy.get('[data-test="signup"]').click()
        cy.get('#firstName').type('Thiago')
        cy.get('#lastName').click()
        cy.get('#username').type('thiagocascaes')
        cy.get('#password').type('pass123456789')
        cy.get('#confirmPassword').type('password')
  });
});
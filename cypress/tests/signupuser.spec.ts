describe('Registro de novo usuário com sucesso', () => {
    it('Deve registrar um novo usuário com informações válidas', () => {
        cy.visit('http://localhost:3000/')
        cy.get('[data-test="signup"]').click()
        cy.get('#firstName').type('Thiago')
        cy.get('#lastName').type('Cascaes')
        cy.get('#username').type('thiagocascaes')
        cy.get('#password').type('password123')
        cy.get('#confirmPassword').type('password123')
        cy.get('[data-test="signup-submit"]').click()
    });
  });
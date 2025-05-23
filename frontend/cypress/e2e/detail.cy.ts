describe('Book Detail Page', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('input[formcontrolname="username"], input[name="username"]').type('admin');
    cy.get('input[formcontrolname="password"], input[name="password"]').type('123456');
    cy.get('button[type="submit"], button.login-btn').click();
  });

  it('should show book details and back button', () => {
    cy.visit('/books/1');
    cy.get('h2').should('exist');
    cy.get('table').contains('Authors');
    cy.get('button[routerLink="/books"]').click();
    cy.url().should('include', '/books');
  });
});

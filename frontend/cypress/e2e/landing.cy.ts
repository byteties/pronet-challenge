describe('Landing Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should not login with invalid credentials', () => {
    cy.get('input[formcontrolname="username"], input[name="username"]').type('wronguser');
    cy.get('input[formcontrolname="password"], input[name="password"]').type('wrongpass');
    cy.get('button[type="submit"], button.login-btn').click();
    cy.contains(/invalid|incorrect|unauthorized/i).should('exist'); // เปลี่ยนถ้ามี error msg อื่น
  });

  it('should login and redirect to /books', () => {
    cy.get('input[formcontrolname="username"], input[name="username"]').type('admin');
    cy.get('input[formcontrolname="password"], input[name="password"]').type('123456');
    cy.get('button[type="submit"], button.login-btn').click();
    cy.url().should('include', '/books');
  });

  it('should block access to /books if not logged in', () => {
    cy.clearLocalStorage();
    cy.visit('/books');
    cy.url().should('not.include', '/books');
    cy.get('button[type="submit"], button.login-btn').should('exist');
  });
});

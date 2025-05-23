describe('Favorites Page', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('input[formcontrolname="username"], input[name="username"]').type('admin');
    cy.get('input[formcontrolname="password"], input[name="password"]').type('123456');
    cy.get('button[type="submit"], button.login-btn').click();
    cy.intercept('GET', '**/books*').as('getBooks');
    cy.visit('/books');
    cy.wait('@getBooks');
    cy.get('button[aria-label="Add to favorites"]:visible').should('exist').first().click();
    cy.contains('My Favorites').should('exist').click();
  });

  it('should show the favorite book', () => {
    cy.url().should('include', '/books/favorites');
    cy.get('table').should('exist');
    cy.get('button[aria-label="Remove from favorites"]').should('exist');
  });

  it('should remove favorite', () => {
    cy.get('button[aria-label="Remove from favorites"]').click();
    cy.get('button[aria-label="Remove from favorites"]').should('not.exist');
  });
});

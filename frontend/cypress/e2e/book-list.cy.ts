describe('Book List Page', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('input[formcontrolname="username"], input[name="username"]').type('admin');
    cy.get('input[formcontrolname="password"], input[name="password"]').type('123456');
    cy.get('button[type="submit"], button.login-btn').click();
    cy.visit('/books');
  });

  it('should display the search bar', () => {
    cy.get('.search-bar').should('exist');
  });

  it('should filter the book list by search', () => {
    cy.get('.search-bar').type('game');
    cy.get('table').contains('Book Name').should('exist');
  });

  it('should add and remove favorite', () => {
    cy.intercept('GET', '**/books*').as('getBooks');
    cy.visit('/books');
    cy.wait('@getBooks');
    cy.get('button.star-btn').first().click();
    cy.get('button.star-btn.star-active').should('exist');
    cy.get('button.star-btn.star-active').first().click();
    cy.get('button.star-btn.star-active').should('not.exist');
  });

  it('should go to book detail when click details', () => {
    cy.intercept('GET', '**/books*').as('getBooks');
    cy.visit('/books');
    cy.wait('@getBooks');
    cy.viewport(375, 667);
    cy.get('button.btn-mobile[aria-label="Details"]').should('be.visible').first().click();
    cy.url().should('include', '/books/');
    cy.get('h2').should('exist');
  });
});

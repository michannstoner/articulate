describe('Homepage', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should have a nav', () => {
    cy.get('nav').should('be.visible')
      .get('h1').should('contain', 'A.').should('be.visible')
      .get('p').should('contain', 'favorites').should('be.visible')
  })

  it('should have an input to search for a word', () => {
    cy.get('form').should('be.visible')
      .get('input[placeholder="search for a word"]').should('be.visible')
      .get('img').should('be.visible')
  })

  it('should display a welcome message', () => {
    cy.get('.welcome-display').should('be.visible')
      .get('.welcome-blob').should('be.visible')
      .get('.welcome-header').should('be.visible').should('contain', 'welcome to ARTICULATE.')
      .get('.search-to-learn').should('be.visible').should('contain', 'look up a word & start learning')
  })
})
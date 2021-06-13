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

  it('should allow a user to search for a word', () => {
    cy.get('input[type="text"]')
      .type('lucky')
      .should('be.visible').should('have.value', 'lucky')
      .get('.search-button').should('be.visible')
      .click()
  })

  it('should display the search results, if the word was found', () => {
    cy.get('input[type="text"]')
      .type('happy')
      .get('.search-button').click()
      .get('.blue-blob-icon').should('be.visible')
      .get('.single-word').should('be.visible').should('contain', 'happy')
      .get('.definition').should('be.visible').should('contain', 'marked by good fortune')
      .get('p').should('be.visible').should('contain', 'pronunciation:')
      .should('contain', 'synonyms: felicitous')
      .should('contain', 'example: a happy outcome')
  })

  it('should clear the input after a search has been made', () => {
    cy.get('input[type="text"]')
      .type('happy')
      .get('.search-button').click()
      .get('input[placeholder="search for a word"]').should('be.visible').should('have.value', '')
  })

  it('should display an error message if a word is entered that is not found in the data', () => {
    cy.get('input[type="text"]')
      .type('fqogih')
      .get('.search-button').click()
      .get('.error-message').should('be.visible').should('contain', 'Oops, something went wrong! Please search for a different word, or try again later.')
  })
})
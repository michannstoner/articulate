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
        .get('input').should('be.empty')
        .get('input[type="text"]')
        .type('lucky')
        .should('be.visible').should('have.value', 'lucky')
        .get('.go-button').should('be.visible').should('contain', 'GO')
    })

    it('should display a welcome message', () => {
      cy.get('.welcome-display').should('be.visible')
        .get('.welcome-blob').should('be.visible')
        .get('.welcome-header').should('be.visible').should('contain', 'welcome to ARTICULATE.')
        .get('.search-to-learn').should('be.visible').should('contain', 'look up a word & start learning')
    })
        
    it('should navigate to the favorites page when the "favorites" link is clicked', () => {
      cy.get('nav')
        .get('.favorites-link').click()
        .url().should('eq', 'http://localhost:3000/favorites')
    })

  describe('Word Display', () => {
    beforeEach(() => {
      cy.get('input[type="text"]')
        .type('lucky')
        .get('.go-button').click()
        .intercept('https://wordsapiv1.p.rapidapi.com/words/happy', 
        {
          "method": "GET",
          "headers": 
          {
            "x-rapidapi-key": "247406a57bmsh73bf0cce7ec0b4cp15cc72jsnf9d8d4aae1f1",
            "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
          }
        }, { fixture: 'test-data.json' })
    })
  
    it('should display the search results, if the word was found', () => {
        cy.get('.blue-blob-icon').should('be.visible')
        .get('.single-word').should('be.visible').should('contain', 'lucky')
        .get('.definition').should('be.visible').should('contain', 'presaging or likely to bring good luck or a good outcome')
        .get('p').should('be.visible').should('contain', 'pronunciation:')
        .should('contain', 'synonyms: favorable, favourable, golden, prosperous')
        .should('contain', 'example: lucky stars')
    })

    it('should clear the input after a search has been made', () => {
        cy.get('input[placeholder="search for a word"]').should('be.visible').should('have.value', '')
    })

    it('should display an add to favorites icon when the word is being displayed', () => {
        cy.get('.add-to-favorites').should('be.visible').should('contain', 'add to favorites')
        .get('.heart-icon').should('be.visible').click()
    })
  })

  describe('Error Handling', () => {

    it('should display an error message if a word is entered that is not found in the data, or if the server is down', () => {
      cy.get('input[type="text"]')
        .type('fqogih')
        .get('.go-button').click()
        .get('.error-message').should('be.visible').should('contain', 'Oops, something went wrong! Please search for a different word, or try again later.')
    })

    it('should display a "page not found" page if a user types in a url that does not exist', () => {
      cy.visit('http://localhost:3000/nonexistent')
        .get('h3').should('be.visible').should('contain', 'Page not found')
        .get('.back-button').should('be.visible').should('contain', 'GO BACK').click()
          .url().should('eq', 'http://localhost:3000/')
    })
  })
})
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
        .fixture('test-data.json')
          .then(testData => {
            cy.intercept('https://wordsapiv1.p.rapidapi.com/words/lucky', 
              {
                "method": "GET",
                "headers": 
                {
                  "x-rapidapi-key": "247406a57bmsh73bf0cce7ec0b4cp15cc72jsnf9d8d4aae1f1",
                  "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
                }
              }, 
              {
                statusCode: 201,
                delay: 100,
                body: testData[0]
              })
            })
    })
        

    it('should navigate to the favorites page when the "favorites" link is clicked', () => {
      cy.get('nav')
        .get('.favorites-link').click()
        .url().should('eq', 'http://localhost:3000/favorites')
    })

  describe('Word Display', () => {
  
    it('should display the search results, if the word was found', () => {
      cy.get('input[type="text"]')
        .type('happy')
        .get('.search-button').click()
        .fixture('test-data.json')
        .then(testData => {
          cy.intercept('https://wordsapiv1.p.rapidapi.com/words/happy', 
            {
              "method": "GET",
              "headers": 
              {
                "x-rapidapi-key": "247406a57bmsh73bf0cce7ec0b4cp15cc72jsnf9d8d4aae1f1",
                "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
              }
            }, 
            {
              statusCode: 201,
              delay: 100,
              body: testData[1]
            })
          })
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
        .fixture('test-data.json')
        .then(testData => {
          cy.intercept('https://wordsapiv1.p.rapidapi.com/words/happy', 
            {
              "method": "GET",
              "headers": 
              {
                "x-rapidapi-key": "247406a57bmsh73bf0cce7ec0b4cp15cc72jsnf9d8d4aae1f1",
                "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
              }
            }, 
            {
              statusCode: 201,
              delay: 100,
              body: testData[1]
            })
          })
        .get('input[placeholder="search for a word"]').should('be.visible').should('have.value', '')
    })

    it('should display an error message if a word is entered that is not found in the data', () => {
      cy.get('input[type="text"]')
        .type('fqogih')
        .get('.search-button').click()
        .get('.error-message').should('be.visible').should('contain', 'Oops, something went wrong! Please search for a different word, or try again later.')
    })

    it('should display an add to favorites icon when the word is being displayed', () => {
      cy.get('input[type="text"]')
        .type('grateful')
        .get('.search-button').click()
        .fixture('test-data.json')
          .then(testData => {
            cy.intercept('https://wordsapiv1.p.rapidapi.com/words/grateful', 
              {
                "method": "GET",
                "headers": 
                {
                  "x-rapidapi-key": "247406a57bmsh73bf0cce7ec0b4cp15cc72jsnf9d8d4aae1f1",
                  "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
                }
              }, 
              {
                statusCode: 201,
                delay: 100,
                body: testData[2]
              })
            })

        .get('.add-to-favorites').should('be.visible').should('contain', 'add to favorites')
        .get('.heart-icon').should('be.visible').click()
    })
  })
})
const baseURL = 'http://localhost:3000/'

describe('Favorites', () => {
  beforeEach(() => {
    cy.visit(baseURL)
      .get('.favorites-link').click()
  })

  it('should tell a user if they don\'t have any favorites yet', () => {
      cy.url().should('eq', 'http://localhost:3000/favorites')
      .get('.no-favorites').should('be.visible').should('contain', 'Nothing in favorites yet!')
  })

  it('should have the option to go back home', () => {
    cy.get('.back-to-home').should('be.visible').should('contain', 'back to home')
    .get('.home-icon').should('be.visible')
      .click()
      .url().should('eq', baseURL)
  })

describe('Adding Favorites', () => {
  beforeEach(() => {
    cy.get('.home-icon').click()
      .get('input[type="text"]').type('lucky')
      .get('.go-button').click()
      .intercept('https://wordsapiv1.p.rapidapi.com/words/lucky', 
      {
        "method": "GET",
        "headers": 
        {
          "x-rapidapi-key": "247406a57bmsh73bf0cce7ec0b4cp15cc72jsnf9d8d4aae 1f1",
          "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
        }
      }, 
      { fixture: 'test-data.json' })
      .get('.heart-icon').click()
      .get('.favorites-link').click()
  })

    it('should display a favorite word if a word has been added', () => {
        cy.get('.favorites-header').should('be.visible').should('contain', 'Favorites')
        .get('.list-word').should('be.visible').should('contain', 'lucky')
        .get('.trash-icon').should('be.visible')
    })
  
    it('should remove a word if the trash can icon is clicked', () => {
      cy.get('.trash-icon').click()
      .get('.no-favorites').should('be.visible').should('contain', 'Nothing in favorites yet!')
    })
  })
})
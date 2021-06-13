describe('Homepage', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should have a nav', () => {
    cy.get('nav').should('be.visible')
      .get('h1').should('contain', 'A.').should('be.visible')
  })
})
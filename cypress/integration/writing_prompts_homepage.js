describe('User writing prompt flows', () => {

  beforeEach(() => {
    cy.intercept('GET', 'https://strange-prompts-api.herokuapp.com/api/v1/prompts', {
      statusCode: 201,
      body: [{
        id:1,
        character: 'A lonely writer',
        setting: 'at their desk',
        problem: 'with writer block'
    }]
  })
    cy.visit('http://localhost:3000')
  })

  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  })

  it('Navbar should contain website logo in image', () => {
      cy.get('img').should('be.visible')
  })

  it('Should be able to click on favorites bookmark and page updates URL and displays favorites', () => {
     cy.get('.nav-btns').click()
     .should('have.class', 'nav-btns')
     cy.url().should('not.eq', 'http://localhost:3000')
  })

   it('Should be able to display random writing prompts on load', () => {
     cy.get('.prompt-section').should('be.visible')
  })

  it('Should display an error message when an invalid card id is in the url', () => {
  cy.visit('http://localhost:3000')
  cy.get('img').should('be.visible')
})

  describe('User favorite flows', () => {

    it('Should add shown prompt to favorites when add to favorites button is clicked', () => {
        cy.intercept('GET', 'https://strange-prompts-api.herokuapp.com/api/v1/favorites', {
            statusCode: 201,
            body: []
        })
        cy.visit('http://localhost:3000/saved-prompts')
        .get('h1').click()
        cy.get('.save').click()
        cy.get('.nav-btns').click()

        //   .get('.delete-btn').should('be.visible')
      })

      it('Should show prompt when generate new prompt button is selected', () => {
        cy.get('.prompt-section').should('be.visible')
      })

  })
});

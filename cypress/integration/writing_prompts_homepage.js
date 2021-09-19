describe('User writing prompt flows', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('Navbar should contain website title', () => {
      cy.get('h1').contains('Strange Prompts for a Strange Planet')
  })
  it('Should be able to click on favorites bookmark page updates URL and display details', () => {
     cy.get('bookmark').click()
     cy.url().should('not.eq', 'http://localhost:3000/')
   })
})

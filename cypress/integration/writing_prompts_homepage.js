describe('User writing prompt flows', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  })

  it('Navbar should contain website title', () => {
      cy.get('h1').contains('Strange Prompts')
  })

  it('Should be able to click on favorites bookmark and page updates URL and displays favorites', () => {
     cy.get('.nav-btns').click()
     .should('have.class', 'nav-btns')
     cy.url().should('not.eq', 'http://localhost:3000')
  })

   it('Should be able to display random writing prompts on load', () => {
     cy.get('.prompt-section').should('be.visible')
  })

  it('Should add shown prompt to favorites when add to favorites button is clicked', () => {
    //cy.
  })

  it('Should show prompt when generate new prompt button is selected', () => {
    
  })
})

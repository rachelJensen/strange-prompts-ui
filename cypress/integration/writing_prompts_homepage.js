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

  it('Should be able to click on favorites bookmark page updates URL and display favorites', () => {
     cy.get('Favorites').click()
     .should('have.class', 'nav-btns')
     cy.url().should('not.eq', 'http://localhost:3000/')
  })

   it('Should be able to display random writing prompts on load', () => {
     cy.get('PromptSection').should('be.visible')
  })

})



// describe('User writing prompt flows', () => {
//
//   it('Navbar should contain website title', () => {
//     cy.visit('http://localhost:3000')
//     cy.get('h1').contains('Strange Prompts')
//   })})

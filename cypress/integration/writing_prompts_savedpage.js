describe('User favorite prompts flows', () => {

    beforeEach(() => {
        cy.intercept('GET', 'https://strange-prompts-api.herokuapp.com/api/v1/favorites')
        cy.visit('http://localhost:3000/saved-prompts')
    })

    it('Should confirm that true is equal to true', () => {
        expect(true).to.equal(true)
    })

    it('Navbar should contain favorites icon', () => {
        cy.get('.nav-btns').should('be.visible')
        .get('h2').contains('Favorites')
    })

    it('Should display all the favorites saved prompts', () => {
        cy.get('.prompts-collection').should('be.visible')
          .get('.prompt-card').should('be.visible')
    });

    it('Should display card of the favorite saved prompts', () => {
        cy.get('.prompt-card').should('be.visible')
          .get('p').should('be.visible')
          .get('.delete-btn').should('be.visible')
    });

    it('Should be able to click on the website title and page updates URL and display the main view', () => {
        cy.get('h1').click()
        .should('have.class', 'title')
        cy.url().should('include', 'http://localhost:3000')
    })

})
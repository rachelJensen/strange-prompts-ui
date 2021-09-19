describe('User favorite prompts flows', () => {

    beforeEach(() => {
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
    });
})
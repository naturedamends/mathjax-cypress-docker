describe('Visuals', () => {
    it('home', () => {
        cy.visit('/post/math-typesetting/')
        const retryOptions = {
            limit: 5,
            delay: 500
        }
        cy.compareSnapshot('home-page', 0, retryOptions)
    })
})

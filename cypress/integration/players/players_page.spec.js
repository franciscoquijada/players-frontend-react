describe('Players Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8000/');
    })

    it('Init page can be opened', () => {
        cy.contains('List of Players');
        cy.get('input').type('1');
    });

    it('Should be can search players by number', () => {
        cy.get('input').type('1');
        cy.contains('Searching Players');
        const expectedCount = 1;
        cy.get('.card').should('have.length', expectedCount);
    });

    it('Should be can change page', () => {
        cy.contains('2').click();
        cy.contains('Searching Players');
        cy.get('.card').should('have.length.greaterThan', 2);
    });
});
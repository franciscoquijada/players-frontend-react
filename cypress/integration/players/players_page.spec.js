describe('Players Page', () => {
    it('Init page can be opened', () => {
        cy.visit('http://localhost:8000/');
        cy.contains('List of Players');
        cy.get('input').type('1');
    });

    it('Should be can search players by number', () => {
        cy.visit('http://localhost:8000/');
        cy.get('input').type('1');
        cy.contains('Searching Players');
        const expectedCount = 1;
        cy.get('.card').should('have.length', expectedCount);
    });

    it('Should be can change page', () => {
        cy.visit('http://localhost:8000/');
        cy.contains('2').click();
    });
});
describe('Players Page', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('URL_PAGE'));
    })

    it('Should be can open init page', () => {
        cy.contains('List of Players');
        cy.get('input').type('1');
        cy.get('.card').should('have.length.greaterThan', 2);
    });

    it('Should be can search players by number', () => {
        cy.get('input').type('1');
        cy.contains('Searching Players');
        const expectedCount = 1;
        cy.get('.card').should('have.length', expectedCount);
    });

    it('Should be can show message player not found', () => {
        cy.get('input').type('0');
        cy.contains('No players were found');
        const expectedCount = 0;
        cy.get('.card').should('have.length', expectedCount);
    });

    it('Should not be able to type characters other than numbers and letters', () => {
        cy.get('input').type('+*,-_&%$#@');
        cy.get('input').should('have.value', '');
    });

    it('Should not be able to type a number after letters', () => {
        const number = '12';
        cy.get('input').type(`${number}dfd`);
        cy.get('input').should('have.value', number);
    });

    it('Should not be able to type a letters after numbers', () => {
        const letter = 'abc';
        cy.get('input').type(`${letter}1234`);
        cy.get('input').should('have.value', letter);
    });

    it('Should be can change page', () => {
        cy.contains('2').click();
        cy.contains('Searching Players');
        cy.get('.card').should('have.length.greaterThan', 2);
    });
});
/// <reference types="cypress" />

describe('testing The-internet', ()=>{
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/');
    });

    it('A/B Testing', ()=>{
        throw new Error('oops');
    });
})
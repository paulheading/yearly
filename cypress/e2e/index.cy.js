it('titles are correct', () => {
  const page = cy.visit('/');

  page.get('title').should('have.text', 'Home | Yearly | Songs you discovered this year')
  page.get('h1').should('have.text', 'Yearly');
});
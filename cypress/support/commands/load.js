Cypress.Commands.add("load", function (path) {
  cy.get("[data-state=not-loaded]").should("not.be.visible");
  cy.get("[data-state=loaded]").should("be.visible");
  cy.location("pathname").should("eq", path);
});

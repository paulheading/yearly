import data from "#selectors/data";

Cypress.Commands.add("banner", function () {
  let options = { matchCase: false };

  cy.get(data.cy("banner")).as("banner");

  cy.get("@banner").should("be.visible");

  cy.get("@banner").contains("offline mode", options);
});

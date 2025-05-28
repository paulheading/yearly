import data from "#selectors/data";

Cypress.Commands.add("card", function (target) {
  cy.get(data.cy("card") + "[data-id=" + target + "]");
});

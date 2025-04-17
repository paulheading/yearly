import cnames from "../../src/scripts/selectors/cnames";

it("select button exists & works", function () {
  cy.visit("/callback");

  // select button exists & works

  cy.get("[data_id=cindy] " + cnames.button.select)
    .should("be.visible")
    .click();

  // build button exists & works

  cy.get(cnames.button.build).should("be.visible").click();

  // back button exists

  cy.get(cnames.button.back).should("be.visible");
});

import cnames from "../../src/scripts/selectors/cnames";
import attrs from "../../src/scripts/selectors/attrs";
import data from "../../src/scripts/selectors/data";

it("select button exists & works", function () {
  cy.visit("/callback");

  // select button exists & works

  cy.get(`[${attrs.data.id}=${data.card.cindy}]` + cnames.button.select)
    .should("be.visible")
    .click();

  // build button exists & works

  cy.get(cnames.button.build).should("be.visible").click();

  // back button exists

  cy.get(cnames.button.back).should("be.visible");
});

import classNames from "../../src/scripts/selectors/classNames";

let { button } = classNames;

it("select button exists & works", function () {
  cy.visit("/callback");

  // select button exists & works

  cy.get("[data_id=cindy] " + button.select)
    .should("be.visible")
    .click();

  // build button exists & works

  cy.get(button.build).should("be.visible").click();

  // back button exists

  cy.get(button.back).should("be.visible");
});

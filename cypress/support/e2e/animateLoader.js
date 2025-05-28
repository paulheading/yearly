import data from "#scripts/selectors/data";

export default function () {
  cy.get("[data-state=not_loaded]").should("be.visible");

  cy.get(data.cy("loader")).should("be.visible");
}

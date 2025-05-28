import data from "#scripts/selectors/data";

export default function () {
  cy.get(data.cy("tracks_added")).as("tracks");

  cy.get("@tracks").should("be.visible");

  cy.get("@tracks").contains("tracks added since");
}

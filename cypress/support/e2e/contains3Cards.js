import data from "#scripts/selectors/data";

export default function () {
  cy.get(data.cy("card")).should("have.length", 3);

  cy.card("custom").should("not.be.visible");
}

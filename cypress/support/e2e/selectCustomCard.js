import data from "#scripts/selectors/data";

export default function (callback) {
  cy.get(".custom_button").click();

  cy.card("custom").find(".dot_button").should("have.length", 5);

  if (callback) callback();

  cy.card("custom").find(data.cy("select")).click();

  cy.get(data.cy("build")).click();
}

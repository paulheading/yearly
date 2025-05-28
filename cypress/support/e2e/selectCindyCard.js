import data from "#scripts/selectors/data";

export default function () {
  cy.card("cindy").as("card");

  cy.get(data.cy("build")).as("build");

  cy.get("@card").find(data.cy("cover")).as("cover");

  cy.get("@card").find(data.cy("config")).as("config");

  cy.get("@cover").find(data.cy("info")).click();

  cy.get("@cover").should("not.be.visible");

  cy.get("@config").should("be.visible");

  cy.get("@config").find(data.cy("info")).click();

  cy.get("@config").should("not.be.visible");

  cy.get("@cover").should("be.visible");

  cy.get("@card").find(data.cy("select")).click();

  cy.get("@build").click();
}

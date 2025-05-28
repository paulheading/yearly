import data from "#scripts/selectors/data";

export default function () {
  let options = { matchCase: false };

  cy.get(data.cy("setting")).as("settings");

  cy.get("@settings").should("have.length", 3);

  cy.get("@settings").eq(0).contains("liked songs", options);

  cy.get("@settings").eq(1).contains("discovered this year", options);

  cy.get("@settings").eq(2).contains("include recommends", options);
}

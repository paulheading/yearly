import { $cy } from "../../src/scripts/selectors";

let { button } = $cy;

it("titles are correct", function () {
  cy.visit("/");

  // meta title exists & appears correctly

  cy.get("title").should(
    "have.text",
    "Home | Yearly | Songs you discovered this year"
  );

  // page title exists & appears correctly

  cy.get("h1").should("have.text", "Yearly");

  cy.contains(button.login, "Log in");

  cy.get(button.login).should("be.visible").click();

  cy.url().should("include", "/callback");
});

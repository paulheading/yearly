import data from "#selectors/data";

Cypress.Commands.add("login", function (url) {
  let options = { matchCase: false };

  cy.visit("/");

  cy.banner();

  cy.get(data.cy("login")).contains("log in", options).click();

  if (!url) return;

  cy.load(url);
});

import displayIndexTitles from "#e2e/displayIndexTitles";

beforeEach(function () {
  cy.visit("/");
});

after(function () {
  cy.login();
});

describe("index page tasks", function () {
  it("displays correct titles", displayIndexTitles);
});

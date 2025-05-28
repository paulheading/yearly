import contains3Cards from "#e2e/contains3Cards";
import selectCindyCard from "#e2e/selectCindyCard";
import data from "#selectors/data";

beforeEach(function () {
  cy.fixture("selects.json").as("selects");
  cy.login("/build");
});

function addFormValue({ selects, index, remove }) {
  cy.get(data.cy("select_form_row")).eq(index).as("this_row");

  cy.get("@this_row").find(data.cy("select-form-button")).as("button");

  cy.get("@this_row").find(data.cy("select-form-list")).as("list");

  cy.get("@this_row").find(data.cy("remove_row_button")).as("remove");

  cy.get("@this_row").should("be.visible").and("have.length", 1);

  cy.get("@button").click();

  cy.get("@list").should("be.visible");

  cy.get("@this_row")
    .find(
      data.cy("select-form-item") + `[data-id=${selects[index]["data-id"]}]`
    )
    .click();

  cy.get("@button")
    .should("have.attr", "data-id", selects[index]["data-id"])
    .contains(selects[index]["title"]);

  if (!remove) return;

  cy.get("@remove").click();
}

describe("build page tests", function () {
  // it("should redirect if no store exists", function () {
  //   cy.visit("/build");
  //   cy.location("pathname").should("eq", "/");
  // });

  it("should set liked songs as source", function () {
    let selects = this.selects;

    cy.get(data.cy("select_form_row")).as("form_rows");

    cy.get(data.cy("source_button")).as("add_row");

    cy.get("@add_row").click();

    addFormValue({ selects, index: 0, remove: true });

    cy.get("@form_rows").should("not.be.visible").and("have.length", 1);

    cy.get("@add_row").click();

    addFormValue({ selects, index: 0 });

    cy.get("@add_row").click();

    addFormValue({ selects, index: 1 });

    cy.get("@form_rows").should("be.visible").and("have.length", 2);
  });

  it("should contain 3 cards: 2 visible. 1 hidden", contains3Cards);

  it("inspect and select cindy card", selectCindyCard);
});

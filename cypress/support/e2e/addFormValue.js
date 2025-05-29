import data from "#scripts/selectors/data";

export default function ({ selects, index, remove }) {
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

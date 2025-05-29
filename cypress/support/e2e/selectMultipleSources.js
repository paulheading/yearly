import addFormValue from "#e2e/addFormValue";

export default function () {
  let { selects } = this;

  cy.get("@add_row").click();

  addFormValue({ selects, index: 0 });

  cy.get("@add_row").click();

  addFormValue({ selects, index: 1 });

  cy.get("@form_rows").should("be.visible").and("have.length", 2);
}

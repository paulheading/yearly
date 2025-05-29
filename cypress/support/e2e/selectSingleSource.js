import addFormValue from "#e2e/addFormValue";

export default function () {
  let { selects } = this;

  cy.get("@add_row").click();

  addFormValue({ selects, index: 0, remove: true });

  cy.get("@form_rows").should("not.be.visible").and("have.length", 1);
}

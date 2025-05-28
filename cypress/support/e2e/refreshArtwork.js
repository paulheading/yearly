import data from "#scripts/selectors/data.js";

export default function () {
  cy.get(data.cy("save_playlist")).should("be.visible");

  cy.get(data.cy("refresh_button")).as("refresh:btn");

  cy.get(data.cy("refresh_image")).as("refresh:img");

  cy.get("@refresh:btn").should("be.visible");

  let path = {
    a: "",
    b: "",
  };

  cy.get("@refresh:img").should(function (element) {
    path.a = element.attr("src");
  });

  cy.get("@refresh:btn").click();

  cy.get("@refresh:img").should(function (element) {
    path.b = element.attr("src");
    expect(path.a).not.equal(path.b);
  });
}

import selectCustomCard from "#e2e/selectCustomCard";

export default function () {
  function callback() {
    cy.get(".dot_button").eq(2).click();

    // cy.get("input[data-range-pos=min]")
    //   .trigger("mousedown", "left")
    //   .trigger("mousemove", { clientX: 100 });

    // cy.get("input[data-range-pos=min]")
    //   .focus()
    //   .type("{rightarrow}{rightarrow}");

    cy.get("input[data-range-pos=min]").invoke("val", 5).trigger("change");

    cy.get("input[data-range-pos=max]").invoke("val", 10).trigger("change");

    // cy.get(".output").contains("5 mins"); // javascript not responding here
  }

  selectCustomCard(callback);
}

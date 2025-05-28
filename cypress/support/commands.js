import "#commands/banner";
import "#commands/card";
import "#commands/load";
import "#commands/login";

// https://docs.cypress.io/api/table-of-contents

// use data-cy to identify elements

// expect an item to disappear
// cy.get("").should("not.exist");

// click an item even if their is something blocking it
// cy.get("").click({ force: true })

// check how many of something exists
// cy.get("").should("have.length", 1);

// target a select option either by value or title
// cy.get("").select("")

// target the first item in a list
// cy.get("").eq(0).contains("")

// target the url
// cy.location("pathname").should("eq", "");

// simulate a back button click
// cy.go('back')

// check for disabled attribute
// cy.get("").should("have.attr", "disabled");
// cy.get("").should("not.have.attr", "disabled");

// cy.should() & cy.and() are the same

// dont use variables!
// cy.get('').as('example')
// cy.get('@example')

// .then() method allows chaining of commands as well as element manipulation. however syntax changes
// cy.get("").then(function (el) {
//   el.addClass('')
//   expect(el.text().to.be.eq(""));
// })

// to get parent or children
// cy.get("").parent();
// cy.get("").children();

// check attribute values
// cy.get("").should("have.attr", "class").and("equal", "value"); // equals value
// cy.get("").should("have.attr", "class").and("match", /value/); // contains value

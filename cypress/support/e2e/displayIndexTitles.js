import data from "#scripts/selectors/data";

export default function () {
  let options = { matchCase: false };

  cy.get("title").contains("songs you discovered this year", options);

  cy.get(data.cy("title")).contains("yearly", options);
}

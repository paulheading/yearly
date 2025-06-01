import inspectCard from "#e2e/inspectCard";
import data from "#scripts/selectors/data";

export default function (callback) {
  let name = "cindy";

  inspectCard("cindy");

  if (callback) callback();

  cy.card(name).find(data.cy("select")).click();

  cy.get(data.cy("build")).click();
}

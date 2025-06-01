import contain3Cards from "#e2e/contain3Cards";
import selectSingleSource from "#e2e/selectSingleSource";
import selectMultipleSources from "#e2e/selectMultipleSources";
import selectCindyCard from "#e2e/selectCindyCard";
import selectCustomCard from "#e2e/selectCustomCard";
import excludesExplicitMusic from "#e2e/excludesExplicitMusic";
import setMinMaxLengths from "#e2e/setMinMaxLengths";

import data from "#selectors/data";

// import settings from "#data/settings";

beforeEach(function () {
  cy.fixture("selects.json").as("selects");

  cy.login("/build");

  cy.get(data.cy("select_form_row")).as("form_rows");

  cy.get(data.cy("source_button")).as("add_row");
});

describe("build page tests", function () {
  // it("redirects if no store exists", function () {
  //   cy.visit("/build");
  //   cy.location("pathname").should("eq", "/");
  // });

  // it("contains 3 cards: 2 visible. 1 hidden", contain3Cards);

  // it("selects a source playlist", selectSingleSource);

  // it("selects multiple source playlists", selectMultipleSources);

  // it("selects and inspect cindy card", function () {
  //   function callback() {
  //     cy.log("callback runs");
  //   }

  //   selectCindyCard(callback);
  // });

  // it("selects custom card", function () {
  //   function callback() {
  //     cy.log("callback runs");
  //   }

  //   selectCustomCard(callback);
  // });

  it("sets a minimum and maxium track length", setMinMaxLengths);

  it("excludes explicit music", excludesExplicitMusic);

  // it("creates a playlist using a query string", function () {});
});

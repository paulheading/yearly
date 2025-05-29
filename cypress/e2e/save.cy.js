import displayCindySettings from "#e2e/displayCindySettings";
import animateLoader from "#e2e/animateLoader";
import displayTracksAdded from "#e2e/displayTracksAdded";
import selectCindyCard from "#e2e/selectCindyCard";
import refreshArtwork from "#e2e/refreshArtwork";

beforeEach(function () {
  cy.login("/build");
  selectCindyCard();
});

describe("save page tests", function () {
  it("animates the loader and displays tracks added", function () {
    animateLoader();
    displayTracksAdded();
    cy.load("/save");
  });

  it("displays active filters", displayCindySettings);

  it("refreshes artwork on click", refreshArtwork);
});

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
  it("should animate loader and display tracks added", function () {
    animateLoader();
    displayTracksAdded();
    cy.load("/save");
  });

  it("should display active filters", function () {
    displayCindySettings();
  });

  it("should refresh artwork on click", function () {
    refreshArtwork();
  });
});

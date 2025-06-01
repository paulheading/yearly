import selectCustomCard from "#e2e/selectCustomCard";

export default function () {
  function callback() {
    cy.get(".dot_button").eq(1).click();

    // ${settings.no_explicit_music.toLowerCase()}

    // cy.log(settings.no_explicit_music);

    cy.get(`input[data-snake=no_explicit_music]`).check({
      force: true,
    });
  }

  selectCustomCard(callback);
}

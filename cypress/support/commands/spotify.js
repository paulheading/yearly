// Cypress.Commands.add("login_challenge", function () {
//   cy.visit("/");

//   cy.get("." + cnames.button.login).click();

//   cy.origin("https://accounts.spotify.com", function () {
//     cy.get("input#login-username").click().type(Cypress.env("spotifyUsername"));
//     cy.get("button#login-button").click();
//   });

//   cy.origin("https://challenge.spotify.com", function () {
//     cy.get("button").contains("Log in with a password").click();
//   });

//   cy.origin("https://accounts.spotify.com", function () {
//     cy.get("input#login-password").click().type(Cypress.env("spotifyPassword"));
//     cy.get("button#login-button").click();
//   });
// });

// Cypress.Commands.add("login", function () {
//   cy.visit("/");

//   cy.get("." + cnames.button.login).click();

//   cy.origin("https://accounts.spotify.com", function () {
//     cy.get("input#login-username").click().type("paulheading@me.com");
//     cy.get("input#login-password").click().type("cMxst22dziFi=$");
//     cy.get("button#login-button").click();
//   });
// });

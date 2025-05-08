import $ from "#selectors";
import displayBanner from "#display/displayBanner";
import createLogin from "#creators/createLogin";
import printInvalidKeys from "#printers/printInvalidKeys";
import printLoginPrompt from "#printers/printLoginPrompt";
import usingLiveData from "#using/usingLiveData";
import getSearchParams from "#getters/getSearchParams";

if (!usingLiveData) displayBanner.innerHTML("<em>OFFLINE MODE</em>");

let { validParams, invalidParams, mixedParams } = getSearchParams;

validParams.loggedIn(() => window.location.assign("/build"));

validParams.loggedOut(function () {
  let content = printLoginPrompt();
  displayBanner.append(content);
});

invalidParams.allScenarios(function ({ invalid }) {
  let content = printInvalidKeys(invalid);
  displayBanner.innerHTML(content);
});

mixedParams.loggedOut(function () {
  let saved = printLoginPrompt();
  let paragraph = document.createElement("p");
  let warning = document.createElement("small");
  let underline = document.createElement("u");
  let content = document.createElement("div");

  underline.innerText = "Some params were invalid";

  warning.append(underline);
  paragraph.append(warning);
  saved.append(paragraph);
  content.append(saved);
  displayBanner.append(content);
});

$.button.login.addEventListener("click", createLogin);

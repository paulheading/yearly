import $ from "~scripts/selectors";
import displayBanner from "~scripts/display/displayBanner";
import createLogin from "~scripts/creators/createLogin";
import printInvalidKeys from "~scripts/printers/printInvalidKeys";
import printLoginPrompt from "~scripts/printers/printLoginPrompt";
import usingLiveData from "~scripts/using/usingLiveData";
import getSearchParams from "~scripts/getters/getSearchParams";

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
  console.log("mixed");
  let content = printLoginPrompt();
  displayBanner.append(content);
});

$.button.login.addEventListener("click", createLogin);

import $ from "~scripts/selectors";
import getAccessToken from "~scripts/getters/getAccessToken";
import displayBanner from "~scripts/display/displayBanner";
import params from "~scripts/listeners/listenSearchParams";
import createLogin from "~scripts/creators/createLogin";
import printInvalidKeys from "~scripts/printers/printInvalidKeys";
import printLoginPrompt from "~scripts/printers/printLoginPrompt";
import usingLiveData from "~scripts/using/usingLiveData";

if (!usingLiveData) displayBanner.innerHTML("<em>OFFLINE MODE</em>");

// listen for params on load

let { empty, valid, invalid } = params();

if (empty) {
  console.log("no params");
} else {
  if (valid.length) {
    if (getAccessToken()) {
      // if valid AND logged in. go to build page
      window.location.assign("/build");
    } else {
      // if valid AND logged out. show alert prompting log in
      let content = printLoginPrompt();
      displayBanner.append(content);
    }
  } else {
    // if not valid. show confirm alert
    if (invalid.length) {
      let content = printInvalidKeys(invalid);
      displayBanner.innerHTML(content);
    }
  }
}

$.button.login.addEventListener("click", createLogin);

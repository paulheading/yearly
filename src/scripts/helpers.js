import $ from "~scripts/selectors";
import store from "~data/store";
import { DateTime } from "luxon";

import keyPress from "~scripts/helpers/keyPress";
import postData from "~scripts/helpers/postData";
import setAccessToken from "~scripts/helpers/setAccessToken";
import setUser from "~scripts/helpers/setUser";
import usingLiveData from "~scripts/helpers/usingLiveData";
import { inCustomId } from "~scripts/filters";

function forEachCustomSetting(callback) {
  let card = store.cards.filter(inCustomId)[0];
  return card.content[0].settings.forEach((setting) => callback(setting));
}

function hideShowElements(a, b) {
  a.style.display = "none";
  b.style.display = "initial";
}

function loadingCurrently(callback) {
  callback();
  hideShowElements($.loaded, $.not_loaded);
}

function loadingComplete(callback) {
  setTimeout(function () {
    displaySection("tracks_added", "none");
    hideShowElements($.not_loaded, $.loaded);
    callback();
  }, 1000);
}

function createPlaylistName() {
  let { now, DATETIME_MED_WITH_SECONDS } = DateTime;
  let timestamp = now().toLocaleString(DATETIME_MED_WITH_SECONDS);
  return `Yearly Roundup [${timestamp}]`;
}

let displaySection = (element, value) => {
  $.sections[element].style.display = value;
};

let preventDefault = (event) => event.preventDefault();

export {
  createPlaylistName,
  displaySection,
  forEachCustomSetting,
  hideShowElements,
  keyPress,
  loadingComplete,
  loadingCurrently,
  postData,
  preventDefault,
  setAccessToken,
  setUser,
  usingLiveData,
};

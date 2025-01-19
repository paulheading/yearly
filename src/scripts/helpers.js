import $ from "~scripts/selectors";

import keyPress from "~scripts/helpers/keyPress";
import postData from "~scripts/helpers/postData";
import setAccessToken from "~scripts/helpers/setAccessToken";
import setUser from "~scripts/helpers/setUser";
import usingLiveData from "~scripts/helpers/usingLiveData";

import { inCustomId } from "~scripts/filters";
import { getDate, getStore } from "~scripts/getters";

function forEachCustomSetting(callback) {
  let card = getStore().cards.filter(inCustomId)[0];
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

let createPlaylistName = () => `Yearly Roundup [${getDate().timestamp}]`;

function createRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let displaySection = (element, value) => {
  let styleIsAlreadyActive = $.sections[element].style.display == value;

  if (styleIsAlreadyActive) return;

  $.sections[element].style.display = value;
};

let preventDefault = (event) => event.preventDefault();

let playlistStyleIsCustom = () => getStore().create.playlist.style == "custom";

let sourceIsLikedSongs = () => getStore().selected.source == 0;

export {
  playlistStyleIsCustom,
  sourceIsLikedSongs,
  createPlaylistName,
  createRandomNumber,
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

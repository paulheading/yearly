import user from "~data/user";

import getAccessToken from "~scripts/getters/getAccessToken";
import getPlaylists from "~scripts/getters/getPlaylists";
import getStoreState from "~scripts/getters/getStoreState";
import loadComplete from "~scripts/loaders/loadComplete";
import setDOMToStoreValues from "~scripts/setters/setDOMToStoreValues";
import setStore from "~scripts/setters/setStore";

import { printFirstName, printSourcePlaylists } from "~scripts/printers";
import { displaySection, is } from "~scripts/helpers";

import {
  listenSelectForm,
  listenRangeInput,
  listenToggleInput,
  listenCustomButton,
  listenInfoButton,
  listenBuildButton,
  listenSelectButton,
  listenDotButtons,
} from "~scripts/listeners";

import { setAccessToken, setUser } from "~scripts/setters";

function createInteractiveDOM() {
  printFirstName();
  printSourcePlaylists();

  listenToggleInput();
  listenRangeInput();
  listenSelectForm();
  listenInfoButton();
  listenSelectButton();
  listenCustomButton();
  listenDotButtons();
  listenBuildButton();
}

async function getPlaylistData() {
  console.warn("creating new token");
  return setAccessToken().then(setUser).then(getPlaylists);
}

function displayPage(callback) {
  getStoreState();
  createInteractiveDOM();

  if (callback) callback();

  loadComplete(function () {
    displaySection("choose_card", "block");
  });
}

if (is.dataLive) {
  if (!getAccessToken()) getPlaylistData().then(displayPage);
  else {
    console.warn("using existing token");
    displayPage(setDOMToStoreValues);
  }
} else {
  setStore(function (store) {
    store.user = user;
    return store;
  }).then(displayPage);
}

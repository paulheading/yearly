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
import getStore from "~scripts/getters/getStore";

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
  return setAccessToken().then(setUser).then(getPlaylists);
}

async function displayPage() {
  if (getStore().params) window.location.assign("/save");

  createInteractiveDOM();

  loadComplete(function () {
    displaySection("choose_card", "block");
  });
}

getStoreState().then(function () {
  if (is.dataLive) {
    if (!getAccessToken()) {
      console.warn("creating new token");
      getPlaylistData().then(displayPage);
    } else {
      console.warn("using existing token");
      displayPage().then(setDOMToStoreValues);
    }
  } else {
    setStore(function (store) {
      store.user = user;
      return store;
    }).then(displayPage);
  }
});

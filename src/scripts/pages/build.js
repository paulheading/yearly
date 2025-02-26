import getStoreState from "~scripts/getters/getStoreState";
import loadComplete from "~scripts/loaders/loadComplete";
import setStore from "~scripts/setters/setStore";
import user from "~data/user";

import { printFirstName, printSourcePlaylists } from "~scripts/printers";
import { displaySection, is } from "~scripts/helpers";
import { getPlaylists } from "~scripts/getters";

import getStore from "~scripts/getters/getStore";

import {
  listenSelectForm,
  listenRangeInput,
  listenToggleInput,
  listenCustomButton,
  listenInfoButton,
  listenBuildButton,
  listenSelectButton,
} from "~scripts/listeners";

import {
  setToggleInput,
  setRangeInput,
  setSelectForm,
  setAccessToken,
  setUser,
} from "~scripts/setters";

function createInteractiveDOM() {
  printFirstName();
  printSourcePlaylists();
  listenToggleInput(setToggleInput);
  listenRangeInput(setRangeInput);
  listenSelectForm(setSelectForm);
  listenInfoButton();
  listenSelectButton();
  listenCustomButton();
  listenBuildButton();
}

async function getPlaylistData() {
  console.warn("creating new token");
  return setAccessToken().then(setUser).then(getPlaylists);
}

function displayPage() {
  getStoreState();
  createInteractiveDOM();

  loadComplete(function () {
    displaySection("choose_card", "block");
  });
}

if (is.dataLive) {
  if (!getStore().access_token) {
    getPlaylistData().then(displayPage);
  } else {
    console.warn("using existing token");
    displayPage();
  }
} else {
  setStore(function (store) {
    store.user = user;
    return store;
  }).then(displayPage);
}

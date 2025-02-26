import checkStoreState from "~scripts/store/checkStoreState";
import loadComplete from "~scripts/loaders/loadComplete";
import setStore from "~scripts/store/setStore";
import user from "~data/user";

import { printFirstName, printSourcePlaylists } from "~scripts/printers";
import { displaySection, is } from "~scripts/helpers";
import { getPlaylists } from "~scripts/getters";

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

function displayPage() {
  loadComplete(function () {
    displaySection("choose_card", "block");
  });
}

if (is.dataLive) {
  setAccessToken()
    .then(setUser)
    .then(getPlaylists)
    .then(checkStoreState)
    .then(createInteractiveDOM)
    .then(displayPage);
} else {
  setStore(function (store) {
    store.user = user;
    return store;
  })
    .then(checkStoreState)
    .then(createInteractiveDOM)
    .then(displayPage);
}

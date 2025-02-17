import checkStoreState from "~scripts/store/checkStoreState";
import loadComplete from "~scripts/loaders/loadComplete";
import setStore from "~scripts/store/setStore";
import user from "~data/user";

import { printFirstName, printSourcePlaylists } from "~scripts/printers";
import { displaySection, usingLiveData } from "~scripts/helpers";
import { getPlaylists } from "~scripts/getters";

import {
  listenSelectList,
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
  setSelectList,
  setAccessToken,
  setUser,
} from "~scripts/setters";

function createInteractiveDOM() {
  printFirstName();
  printSourcePlaylists();
  listenToggleInput(setToggleInput);
  listenRangeInput(setRangeInput);
  listenSelectList(setSelectList);
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

if (usingLiveData) {
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

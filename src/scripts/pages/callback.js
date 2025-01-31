import store from "~data/store";
import user from "~data/user";

import { displaySection, loading, usingLiveData } from "~scripts/helpers";

import {
  listenSelectList,
  listenRangeInput,
  listenToggleInput,
  listenCustomButton,
  listenInfoButton,
  listenBuildButton,
  listenBackButton,
  listenSaveButton,
  listenSelectButton,
} from "~scripts/listeners";

import { getPlaylists } from "~scripts/getters";
import { printFirstName, printSourcePlaylists } from "~scripts/printers";
import { setAccessToken, setStore, setUser } from "~scripts/setters";

function loadChooseCard() {
  function showElements() {
    displaySection("choose_card", "block");
  }
  loading.complete(showElements);
}

function createInteractiveDOM() {
  printFirstName();
  printSourcePlaylists();

  listenToggleInput(setStore.toggleInput);
  listenRangeInput(setStore.rangeInput);
  listenSelectList(setStore.selectList);

  listenInfoButton();
  listenSelectButton();
  listenCustomButton();
  listenBuildButton();
  listenBackButton();
  listenSaveButton();
}

if (usingLiveData) {
  setAccessToken()
    .then(setUser)
    .then(getPlaylists)
    .then(createInteractiveDOM)
    .then(loadChooseCard);
}

if (!usingLiveData) {
  async function setUser() {
    store.user = user;
  }

  setUser().then(createInteractiveDOM).then(loadChooseCard);
}

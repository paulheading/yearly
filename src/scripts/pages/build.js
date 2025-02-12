import user from "~data/user";

import { displaySection, loading, usingLiveData } from "~scripts/helpers";

import setStore from "~scripts/store/setStore";

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
import { setAccessToken, setUser } from "~scripts/setters";

import setToggleInput from "~scripts/setters/setToggleInput";
import setRangeInput from "~scripts/setters/setRangeInput";
import setSelectList from "~scripts/setters/setSelectList";

import checkStoreExists from "~scripts/store/checkStoreExists";

checkStoreExists();

function loadChooseCard() {
  function showElements() {
    displaySection("choose_card", "block");
  }
  loading.complete(showElements);
}

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
    setStore(function (store) {
      store.user = user;
      return store;
    });
  }

  setUser().then(createInteractiveDOM).then(loadChooseCard);
}

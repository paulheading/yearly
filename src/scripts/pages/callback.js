import store from "~data/store";
import user from "~data/user";
import print from "~scripts/print";

import selectFormListener from "~scripts/components/select";
import rangeInputListener from "~scripts/components/range";

import {
  displaySection,
  loadingComplete,
  setAccessToken,
  setUser,
  usingLiveData,
} from "~scripts/helpers";

import {
  customButtonListener,
  infoButtonListener,
  buildButtonListener,
  backButtonListener,
  saveButtonListener,
  selectButtonListener,
} from "~scripts/components/buttons";
import { getPlaylists } from "~scripts/getters";

function loadChooseCard() {
  function showElements() {
    displaySection("choose_card", "block");
  }
  loadingComplete(showElements);
}

function createInteractiveDOM() {
  print.firstName();
  print.sourcePlaylists();
  rangeInputListener();
  selectFormListener();
  infoButtonListener();
  selectButtonListener();
  customButtonListener();
  buildButtonListener();
  backButtonListener();
  saveButtonListener();
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

import getStoreState from "~scripts/getters/getStoreState";
import loadComplete from "~scripts/loaders/loadComplete";
import setStore from "~scripts/setters/setStore";
import $ from "~scripts/selectors";
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
  listenDotButtons,
} from "~scripts/listeners";

import { setAccessToken, setUser } from "~scripts/setters";
import { toggleSelectedCard } from "~scripts/listeners/listenSelectButton";
import { switchToCustom } from "~scripts/listeners/listenCustomButton";
import setCustomConfig from "~scripts/setters/setCustomConfig";
import getAccessToken from "~scripts/getters/getAccessToken";

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

    function callback() {
      let { style } = getStore().playlist;

      if (!style) return;

      let $card = $.card[style];

      let { state } = $.card.selectors($card);

      toggleSelectedCard({ state, $card });

      if (style != "custom") return;

      switchToCustom($.button.custom);

      setCustomConfig();
    }

    displayPage(callback);
  }
} else {
  setStore(function (store) {
    store.user = user;
    return store;
  }).then(displayPage);
}

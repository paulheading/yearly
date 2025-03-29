import $ from "~scripts/selectors";
import getTracks from "~scripts/getters/getTracks";
import getStore from "~scripts/getters/getStore";
import getStoreState from "~scripts/getters/getStoreState";
import getPlaylistRecommends from "~scripts/getters/getPlaylistRecommends";

import displaySection from "~scripts/helpers/displaySection";
import dataIsLive from "~scripts/helpers/is/dataLive";

import {
  listenSaveButton,
  listenBackButton,
  listenRefreshButton,
} from "~scripts/listeners";

import loadInProgress from "~scripts/loaders/loadInProgress";
import loadComplete from "~scripts/loaders/loadComplete";

import printYearAdded from "~scripts/printers/printYearAdded";
import printPlaylist from "~scripts/printers/printPlaylist";
import printPlaylistConfig from "~scripts/printers/printPlaylistConfig";

import filterResults from "~scripts/filters/filterResults";
import { printLocalTracks } from "~scripts/printers";
import tracks from "~data/tracks";
import setStore from "~scripts/setters/setStore";

function createInteractiveDOM() {
  printYearAdded();
  listenSaveButton();
  listenBackButton();
  listenRefreshButton();
  printPlaylistConfig();
  printPlaylistSections();
}

function displayPage() {
  createInteractiveDOM();

  loadComplete(function () {
    displaySection("save_playlist", "block");
    displaySection("confirm_settings", "block");

    if (getStore().params) {
      displaySection("banner", "block");
      $.print.banner.innerText = `Created using params!`;

      setStore(function (store) {
        store.params = false;
        return store;
      });
    }
  });
}

function printPlaylistSections() {
  if (!dataIsLive) {
    printLocalTracks(tracks.length);
    filterResults(tracks);
    return;
  }

  getTracks()
    .then(filterResults)
    .then(function (items) {
      if (!items.length) {
        return loadComplete(function () {
          displaySection("empty_playlist", "block");
        });
      }

      if (items.length < 10) getPlaylistRecommends(items);

      printPlaylist(items);
    });
}

getStoreState()
  .then(function () {
    loadInProgress(function () {
      displaySection("tracks_added", "block");
    });
  })
  .then(displayPage);

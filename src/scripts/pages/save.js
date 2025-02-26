import checkStoreState from "~scripts/store/checkStoreState";
import tracks from "~data/tracks";
import loadInProgress from "~scripts/loaders/loadInProgress";
import getTracks from "~scripts/getters/getTracks";
import filterResults from "~scripts/filters/filterResults";

import { is, displaySection } from "~scripts/helpers";
import { listenBackButton, listenRefreshButton, listenSaveButton } from "~scripts/listeners";
import { printYearAdded, printLocalTracks } from "~scripts/printers";

import getPlaylistRecommends from "~scripts/getters/getPlaylistRecommends";
import printPlaylist from "~scripts/printers/printPlaylist";
import loadComplete from "~scripts/loaders/loadComplete";

async function loadPage() {
  loadInProgress(function () {
    displaySection("tracks_added", "block");
  });
}

loadPage()
  .then(function () {
    printYearAdded();
    listenSaveButton();
    listenBackButton();
    listenRefreshButton();
  })
  .then(function () {
    if (is.dataLive) {
      getTracks()
        .then(filterResults)
        .then(function (items) {
          if (!items.length) {
            return loadComplete(function () {
              displaySection("empty_playlist", "block");
            });
          } else {
            if (items.length < 10) getPlaylistRecommends(items);

            printPlaylist(items);

            loadComplete(function () {
              displaySection("save_playlist", "block");
            });
          }
        })
        .then(checkStoreState);
    } else {
      printLocalTracks(tracks.length);
      filterResults(tracks).then(checkStoreState);
    }
  });

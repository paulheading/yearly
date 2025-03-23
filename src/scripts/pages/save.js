import getStoreState from "~scripts/getters/getStoreState";
import tracks from "~data/tracks";
import loadInProgress from "~scripts/loaders/loadInProgress";
import getTracks from "~scripts/getters/getTracks";
import filterResults from "~scripts/filters/filterResults";

import { is, displaySection } from "~scripts/helpers";
import {
  listenBackButton,
  listenRefreshButton,
  listenSaveButton,
} from "~scripts/listeners";
import { printYearAdded, printLocalTracks } from "~scripts/printers";

import getPlaylistRecommends from "~scripts/getters/getPlaylistRecommends";
import printPlaylist from "~scripts/printers/printPlaylist";
import loadComplete from "~scripts/loaders/loadComplete";
import getPlaylistActiveConfig from "~scripts/getters/getPlaylistActiveConfig";
import exclude from "~scripts/filters/exclude";
import getAstroClass from "~scripts/getters/getAstroClass";
import getAccessToken from "~scripts/getters/getAccessToken";
import getStore from "~scripts/getters/getStore";

if (is.dataLive && !getAccessToken()) window.location.assign("/build");

async function loadPage() {
  loadInProgress(function () {
    displaySection("tracks_added", "block");
    console.log(getStore());
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
          }

          if (items.length < 10) getPlaylistRecommends(items);

          printPlaylist(items);

          loadComplete(function () {
            displaySection("save_playlist", "block");
            displaySection("confirm_settings", "block");
          });

          let $box = document.querySelector(".box");

          let astroClass = getAstroClass($box);

          function createConfigTag(title) {
            let $item = document.createElement("div");

            let classList = ["setting", astroClass];

            classList.forEach((className) => $item.classList.add(className));

            $item.innerText = title;

            return $item;
          }

          let { source } = getStore().playlist;

          let title = "Source: " + source.title;

          let $source = createConfigTag(title);

          $box.append($source);

          getPlaylistActiveConfig().forEach(function ({ title, value }) {
            let $item = createConfigTag(title);

            if (exclude.allBooleans(value)) {
              $item.innerText = $item.innerText + ": " + value;
            }

            $box.append($item);
          });
        })
        .then(getStoreState);
    } else {
      printLocalTracks(tracks.length);
      filterResults(tracks).then(getStoreState);
    }
  });

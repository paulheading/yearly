import getStoreState from "~scripts/getters/getStoreState";

import displaySection from "~scripts/display/displaySection";
import displaySavePlaylist from "~scripts/display/displaySavePlaylist";
import loadInProgress from "~scripts/loaders/loadInProgress";

import asyncWrap from "~scripts/helpers/asyncWrap";

asyncWrap(getStoreState)
  .then(function () {
    loadInProgress(function () {
      displaySection("tracks_added", "block");
    });
  })
  .then(displaySavePlaylist);

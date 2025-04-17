import getStoreState from "~scripts/getters/getStoreState";

import displaySection from "~scripts/display/displaySection";
import displaySavePlaylist from "~scripts/display/displaySavePlaylist";
import loadInProgress from "~scripts/loaders/loadInProgress";

import asyncWrap from "~scripts/helpers/asyncWrap";
import data from "~scripts/selectors/data";

asyncWrap(getStoreState)
  .then(function () {
    loadInProgress(function () {
      displaySection(data.section.tracks_added, "block");
    });
  })
  .then(displaySavePlaylist);

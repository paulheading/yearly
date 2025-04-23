import asyncWrap from "~scripts/helpers/asyncWrap";
import getStoreState from "~scripts/getters/getStoreState";
import loadTracksAdded from "~scripts/loaders/loadTracksAdded";
import getTracks from "~scripts/getters/getTracks";
import filterTracks from "~scripts/filters/filterTracks";
import setPlaylistData from "~scripts/setters/setPlaylistData";
import createSaveDOM from "~scripts/creators/createSaveDOM";
import displaySavePlaylist from "~scripts/display/displaySavePlaylist";

asyncWrap(getStoreState)
  .then(loadTracksAdded)
  .then(getTracks)
  .then(filterTracks)
  .then(setPlaylistData)
  .then(createSaveDOM)
  .then(displaySavePlaylist);

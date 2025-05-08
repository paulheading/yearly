import asyncWrap from "#helpers/asyncWrap";
import getStoreState from "#getters/getStoreState";
import loadTracksAdded from "#loaders/loadTracksAdded";
import getTracks from "#getters/getTracks";
import filterTracks from "#filters/filterTracks";
import setPlaylistData from "#setters/setPlaylistData";
import createSaveDOM from "#creators/createSaveDOM";
import displaySavePlaylist from "#display/displaySavePlaylist";

asyncWrap(getStoreState)
  .then(loadTracksAdded)
  .then(getTracks)
  .then(filterTracks)
  .then(setPlaylistData)
  .then(createSaveDOM)
  .then(displaySavePlaylist);

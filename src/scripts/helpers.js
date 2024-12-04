import $ from "~scripts/selectors";
import store from "~data/store";
import { DateTime } from "luxon";

function switchElements(a, b) {
  a.style.display = "none";
  b.style.display = "initial";
}

function loadingCurrently(callback) {
  callback();
  switchElements($.loaded, $.not_loaded);
}

function loadingComplete(callback) {
  setTimeout(function () {
    switchElements($.not_loaded, $.loaded);
    callback();
  }, 1000);
}

let getYear = () => DateTime.now().toFormat("yyyy");

let getYearFromString = (value) => value.slice(0, 4);

function byAlbumReleaseDate(item, callback) {
  let { track } = item;
  let { album } = track;

  callback(item);

  return getYearFromString(album.release_date) == getYear();
}

let byContentType = ({ type }) => type == "config";

let byLowestPopularity = (a, b) => a.track.popularity - b.track.popularity;

let byPlaylistId = ({ id }) => id == store.selected.id;

function createPlaylistName() {
  let { now, DATETIME_MED_WITH_SECONDS } = DateTime;
  let timestamp = now().toLocaleString(DATETIME_MED_WITH_SECONDS);
  return `Yearly Roundup [${timestamp}]`;
}

export {
  switchElements,
  loadingCurrently,
  loadingComplete,
  getYear,
  getYearFromString,
  byAlbumReleaseDate,
  byContentType,
  byLowestPopularity,
  byPlaylistId,
  createPlaylistName,
};

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
    displaySection("tracks_added", "none");
    switchElements($.not_loaded, $.loaded);
    callback();
  }, 1000);
}

let getYear = () => DateTime.now().toFormat("yyyy");

let getYearFromString = (value) => value.slice(0, 4);

let byContentType = ({ type }) => type == "config";

let byLowestPopularity = (a, b) => a.track.popularity - b.track.popularity;

let byPlaylistId = ({ id }) => id == store.selected.id;

function createPlaylistName() {
  let { now, DATETIME_MED_WITH_SECONDS } = DateTime;
  let timestamp = now().toLocaleString(DATETIME_MED_WITH_SECONDS);
  return `Yearly Roundup [${timestamp}]`;
}

function addedThisYear({ added_at }) {
  let year_added = getYearFromString(added_at);
  let result = year_added == getYear();

  // console.log("year added: ", year_added, "result: ", result);

  return result;
}

function releasedThisYear({ track }) {
  let { album } = track;

  let year_released = getYearFromString(album.release_date);
  let result = year_released == getYear();

  // console.log("year released: ", year_released, "result: ", result);

  return result;
}

let displaySection = (element, value) => {
  $.sections[element].style.display = value;
};

export {
  switchElements,
  loadingCurrently,
  loadingComplete,
  getYear,
  getYearFromString,
  byContentType,
  byLowestPopularity,
  byPlaylistId,
  createPlaylistName,
  addedThisYear,
  releasedThisYear,
  displaySection,
};

import $ from "~scripts/selectors";
import store from "~data/store";
import { DateTime } from "luxon";

let forEachCustomSetting = (callback) =>
  store.cards.custom.content[0].settings.forEach((setting) =>
    callback(setting)
  );

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

let byHighestPopularity = (a, b) => b.track.popularity - a.track.popularity;

let byPlaylistId = ({ id }) => id == store.create.playlist.style;

let byPlaylistOwner = ({ owner }) =>
  owner.display_name == store.user.display_name;

let outPlaylistExcess = (_, index) => index < 10;

let inPlaylistExcess = (_, index) => index >= 10;

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

let includeExplicit = ({ track }) => track.explicit;

let excludeExplicit = ({ track }) => !track.explicit;

let milliseconds = 60000;

let minimumLength = ({ track }, minimum) => {
  let minutes = Math.floor(track.duration_ms / milliseconds);
  let result = minutes >= minimum;
  return result;
};

let maximumLength = ({ track }, maximum) => {
  let minutes = Math.ceil(track.duration_ms / milliseconds);
  let result = minutes <= maximum;
  return result;
};

let displaySection = (element, value) => {
  $.sections[element].style.display = value;
};

function getSiblings(element) {
  // for collecting siblings
  let siblings = [];
  // if no parent, return no sibling
  if (!element.parentNode) return siblings;
  // first child of the parent node
  let sibling = element.parentNode.firstChild;

  // collecting siblings
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== element) siblings.push(sibling);
    sibling = sibling.nextSibling;
  }

  return siblings;
}

let byName = function (a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
};

let keyPress = {};

keyPress.isMatch = (key, array) => array.includes(key);

keyPress.isOpen = (key) => keyPress.isMatch(key, ["Enter", " "]);

keyPress.isClose = (key) => keyPress.isMatch(key, ["Escape"]);

keyPress.isDown = (key) => keyPress.isMatch(key, ["ArrowDown"]);

keyPress.isUp = (key) => keyPress.isMatch(key, ["ArrowUp"]);

keyPress.isTab = (key) => keyPress.isMatch(key, ["Tab"]);

keyPress.isOpenGroup = function (key) {
  return keyPress.isOpen(key) || keyPress.isUp(key) || keyPress.isDown(key);
};

let preventDefault = (event) => event.preventDefault();

export {
  keyPress,
  switchElements,
  loadingCurrently,
  loadingComplete,
  getSiblings,
  getYear,
  getYearFromString,
  byContentType,
  byHighestPopularity,
  byLowestPopularity,
  byPlaylistId,
  byPlaylistOwner,
  inPlaylistExcess,
  outPlaylistExcess,
  createPlaylistName,
  addedThisYear,
  releasedThisYear,
  displaySection,
  forEachCustomSetting,
  includeExplicit,
  excludeExplicit,
  minimumLength,
  maximumLength,
  byName,
  preventDefault,
};

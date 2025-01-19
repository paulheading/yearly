import { inCustomId, outCustomId } from "~scripts/filters/customId";
import { getDate, getStore } from "~scripts/getters";

let byContentType = ({ type }) => type == "config";

let byPlaylistId = ({ id }) => id == getStore().create.playlist.style;

let byPlaylistOwner = ({ owner }) =>
  owner.display_name == getStore().user.display_name;

let inExplicit = ({ track }) => track.explicit;

let outExplicit = ({ track }) => !track.explicit;

let inPlaylistExcess = (_, index) => index >= 10;

let outPlaylistExcess = (_, index) => index < 10;

let milliseconds = 60000;

function minimumLength({ track }, minimum) {
  let minutes = Math.floor(track.duration_ms / milliseconds);

  return minutes >= minimum;
}

function maximumLength({ track }, maximum) {
  let minutes = Math.ceil(track.duration_ms / milliseconds);

  return minutes <= maximum;
}

function processYearValue(value, custom_year) {
  let string = getDate(value).yearFromString;
  let target = custom_year ? custom_year : getDate().year;

  return { string, target };
}

function noOlderThanYear(value, custom_year) {
  let { string, target } = processYearValue(value, custom_year);

  return string >= target;
}

function noNewerThanYear(value, custom_year) {
  let { string, target } = processYearValue(value, custom_year);

  return string <= target;
}

function matchYear(value, custom_year) {
  let { string, target } = processYearValue(value, custom_year);

  return string == target;
}

export {
  byContentType,
  byPlaylistId,
  byPlaylistOwner,
  inCustomId,
  outCustomId,
  inPlaylistExcess,
  outPlaylistExcess,
  inExplicit,
  outExplicit,
  minimumLength,
  maximumLength,
  noNewerThanYear,
  noOlderThanYear,
  matchYear,
};

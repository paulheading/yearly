import store from "~data/store";

import { inCustomId, outCustomId } from "~scripts/filters/customId";
import { getYear, getYearFromString } from "~scripts/getters";

let byContentType = ({ type }) => type == "config";

let byPlaylistId = ({ id }) => id == store.create.playlist.style;

let byPlaylistOwner = ({ owner }) =>
  owner.display_name == store.user.display_name;

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

function noOlderThanYear(value, custom_year) {
  let string_year = getYearFromString(value);
  let target_year = custom_year ? custom_year : getYear();

  return string_year >= target_year;
}

function matchYear(value, custom_year) {
  let string_year = getYearFromString(value);
  let target_year = custom_year ? custom_year : getYear();

  return string_year == target_year;
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
  noOlderThanYear,
  matchYear,
};

import store from "~data/store";
import { getYear, getYearFromString } from "~scripts/helpers";

let byContentType = ({ type }) => type == "config";

let byPlaylistId = ({ id }) => id == store.create.playlist.style;

let byPlaylistOwner = ({ owner }) =>
  owner.display_name == store.user.display_name;

let outPlaylistExcess = (_, index) => index < 10;

let inPlaylistExcess = (_, index) => index >= 10;

let inExplicit = ({ track }) => track.explicit;

let outExplicit = ({ track }) => !track.explicit;

let milliseconds = 60000;

function minimumLength({ track }, minimum) {
  let minutes = Math.floor(track.duration_ms / milliseconds);
  let result = minutes >= minimum;
  return result;
}

function maximumLength({ track }, maximum) {
  let minutes = Math.ceil(track.duration_ms / milliseconds);
  let result = minutes <= maximum;
  return result;
}

function releasedThisYear({ track }) {
  let { album } = track;

  let year_released = getYearFromString(album.release_date);

  let result = year_released == getYear();

  return result;
}

function addedThisYear({ added_at }) {
  let year_added = getYearFromString(added_at);

  let result = year_added == getYear();

  return result;
}

export {
  addedThisYear,
  byContentType,
  byPlaylistId,
  byPlaylistOwner,
  inPlaylistExcess,
  outPlaylistExcess,
  inExplicit,
  outExplicit,
  minimumLength,
  maximumLength,
  releasedThisYear,
};

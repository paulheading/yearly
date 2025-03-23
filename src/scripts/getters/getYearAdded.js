import { getDate, getPlaylistConfig } from "~scripts/getters";
import { is } from "~scripts/helpers";
import settings from "~data/settings";

export default function () {
  let { year } = getDate();

  if (!is.playlistStyleCustom()) return year;

  let { year_added } = settings;

  let config = getPlaylistConfig().filter(
    ({ title }) => title == year_added
  )[0];

  let { value } = config;

  if (!value && is.sourceLikedSongs()) return year;

  return value;
}

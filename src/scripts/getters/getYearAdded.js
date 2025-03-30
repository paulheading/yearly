import getDate from "~scripts/getters/getDate";
import getPlaylistConfig from "~scripts/getters/getPlaylistConfig";
import settings from "~data/settings";
import usingCustomStyle from "~scripts/using/usingCustomStyle";
import usingLikedSongs from "~scripts/using/usingLikedSongs";

export default function () {
  let { year } = getDate();

  if (!usingCustomStyle()) return year;

  let { year_added } = settings;

  let config = getPlaylistConfig().filter(
    ({ title }) => title == year_added
  )[0];

  let { value } = config;

  if (!value && usingLikedSongs()) return year;

  return value;
}

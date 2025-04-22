import getDate from "~scripts/getters/getDate";
import getPlaylistConfig from "~scripts/getters/getPlaylistConfig";
import settings from "~data/settings";
import usingCustomStyle from "~scripts/using/usingCustomStyle";

export default function () {
  let { year } = getDate();

  if (!usingCustomStyle()) return year;

  let config = getPlaylistConfig().filter(function ({ title }) {
    return title == settings.year_added;
  })[0];

  let { value } = config;

  if (!value) return year;

  return value;
}

import getDate from "#getters/getDate";
import getPlaylistConfig from "#getters/getPlaylistConfig";
import settings from "#data/settings";
import usingCustomStyle from "#using/usingCustomStyle";
import exclude from "#filters/exclude";

export default function () {
  let { year } = getDate();

  if (!usingCustomStyle()) return year;

  let config = getPlaylistConfig().filter(function ({ title }) {
    return title == settings.year_added;
  })[0];

  let { value } = config;

  if (!exclude.falsyBooleans(value)) return year;

  return value;
}

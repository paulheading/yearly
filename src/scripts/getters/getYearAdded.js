import { getDate, getPlaylistConfig } from "~scripts/getters";
import { is } from "~scripts/helpers";
import settings from "~data/settings";

export default function () {
  let { year } = getDate();

  if (!is.playlistStyleCustom()) return year;

  let { year_added } = settings;

  let config = getPlaylistConfig().filter(({ title }) => title == year_added);

  let { value } = config[0];

  return value ? value : year;
}

import exclude from "#filters/exclude";
import getPlaylistConfig from "#getters/getPlaylistConfig";

export default function (value) {
  let config = getPlaylistConfig(value);

  return config.filter(({ value }) => exclude.falsyBooleans(value));
}

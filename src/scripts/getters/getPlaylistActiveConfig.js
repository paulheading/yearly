import exclude from "~scripts/filters/exclude";
import getPlaylistConfig from "~scripts/getters/getPlaylistConfig";

export default function (value) {
  let config = getPlaylistConfig(value);

  return config.filter(({ value }) => exclude.falsyBooleans(value));
}

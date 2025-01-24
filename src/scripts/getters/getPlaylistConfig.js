import getStore from "~scripts/getters/getStore";
import { include } from "~scripts/filters";

export default function () {
  let playlist = getStore().cards.filter(include.playlistId)[0];

  let config = playlist.content.filter(include.typeConfig);

  if (!config.length > 0)
    return console.error("config array has no length: ", config);

  return config[0].settings;
}

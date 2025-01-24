import { inConfigType, byPlaylistId } from "~scripts/filters";
import { getStore } from "~scripts/getters";

export default function () {
  let playlist = getStore().cards.filter(byPlaylistId)[0];

  let config = playlist.content.filter(inConfigType);

  if (!config.length > 0)
    return console.error("config array has no length: ", config);

  return config[0].settings;
}

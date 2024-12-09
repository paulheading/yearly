import { byContentType, byPlaylistId } from "~scripts/helpers";
import store from "~data/store";

export default function () {
  let playlist =
    store.style != "custom"
      ? store.cards.playlists.filter(byPlaylistId)[0]
      : store.cards.custom;

  let config = playlist.content.filter(byContentType);

  if (!config.length > 0) {
    return console.error("config array has no length: ", config);
  }

  return config[0].settings;
}

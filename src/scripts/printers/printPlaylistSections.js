import getStore from "~scripts/getters/getStore";
import loadEmptyPlaylist from "~scripts/loaders/loadEmptyPlaylist";
import printPlaylist from "~scripts/printers/printPlaylist";

export default function () {
  let { tracks } = getStore().playlist;

  if (!tracks.length) {
    loadEmptyPlaylist();
    return;
  }

  printPlaylist();
}

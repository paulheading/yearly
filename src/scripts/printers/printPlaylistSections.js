import getStore from "#getters/getStore";
import loadEmptyPlaylist from "#loaders/loadEmptyPlaylist";
import printPlaylist from "#printers/printPlaylist";

export default function () {
  let { tracks } = getStore().playlist;

  if (!tracks.length) {
    loadEmptyPlaylist();
    return;
  }

  printPlaylist();
}

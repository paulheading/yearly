import tracks from "~data/tracks";
import filterResults from "~scripts/filters/filterResults";
import getTracks from "~scripts/getters/getTracks";
import getPlaylistRecommends from "~scripts/getters/getPlaylistRecommends";
import printPlaylist from "~scripts/printers/printPlaylist";
import printLocalTracks from "~scripts/printers/printLocalTracks";
import usingLiveData from "~scripts/using/usingLiveData";
import displaySection from "~scripts/display/displaySection";
import data from "~scripts/selectors/data";
import loadComplete from "~scripts/loaders/loadComplete";

function loadEmptyPlaylist() {
  loadComplete(function () {
    displaySection(data.section.empty_playlist, "block");
  });
}

function handlePlaylistItems(items) {
  if (!items.length) return loadEmptyPlaylist();

  if (items.length < 10) getPlaylistRecommends(items);

  printPlaylist(items);
}

export default function () {
  if (!usingLiveData) {
    printLocalTracks(tracks.length);
    filterResults(tracks);
    return;
  }

  getTracks().then(filterResults).then(handlePlaylistItems);
}

import { printPlaylistTrack } from "~scripts/services";
import {
  byLowestPopularity,
  createPlaylistName,
  displaySection,
  loadingComplete,
} from "~scripts/helpers";

import $ from "~scripts/selectors";
import store from "~data/store";

export default function (tracks) {
  tracks = tracks.filter((_, index) => index < 10);
  tracks = tracks.sort(byLowestPopularity);

  store.create.playlist.name = createPlaylistName();
  store.create.playlist.tracks = tracks;

  $.playlist_name().innerText = store.create.playlist.name;
  $.playlist_owner().innerText = store.user.display_name;
  $.playlist_owner().href = store.user.external_urls.spotify;

  store.create.playlist.tracks.forEach(printPlaylistTrack);

  function showElements() {
    displaySection("save_playlist", "block");
  }

  loadingComplete(showElements);
}

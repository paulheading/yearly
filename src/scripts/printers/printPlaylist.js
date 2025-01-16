import $ from "~scripts/selectors";
import store from "~data/store";
import { printPlaylistTrack } from "~scripts/printers";

import {
  createPlaylistName,
  displaySection,
  loadingComplete,
} from "~scripts/helpers";

// import { outPlaylistExcess, inPlaylistExcess } from "~scripts/filters";

export default function (tracks) {
  store.create.playlist.tracks = tracks;

  // store.create.playlist.tracks = tracks.filter(outPlaylistExcess);

  // store.create.playlist.excess = tracks.filter(inPlaylistExcess);

  store.create.playlist.name = createPlaylistName();

  $.playlist_name().innerText = store.create.playlist.name;
  $.playlist_owner().innerText = store.user.display_name;
  $.playlist_owner().href = store.user.external_urls.spotify;

  if (!store.selected.track) store.selected.track = $.playlist_track();

  $.playlist_tracks().forEach(($track) => $track.remove());

  store.create.playlist.tracks.forEach(printPlaylistTrack);

  function createRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let src = "/playlist" + createRandomNumber(1, 18) + ".jpg";

  $.playlist_image().src = src;

  function showElements() {
    displaySection("save_playlist", "block");
  }

  loadingComplete(showElements);
}

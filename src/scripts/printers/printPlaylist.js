import $ from "~scripts/selectors";
import store from "~data/store";

import { printPlaylistTrack } from "~scripts/printers";

import {
  createPlaylistName,
  displaySection,
  loadingComplete,
} from "~scripts/helpers";

import { setPlaylistImage } from "~scripts/setters";

// import { outPlaylistExcess, inPlaylistExcess } from "~scripts/filters";

export default function (tracks) {
  store.create.playlist.tracks = tracks;

  // store.create.playlist.tracks = tracks.filter(outPlaylistExcess);

  // store.create.playlist.excess = tracks.filter(inPlaylistExcess);

  store.create.playlist.name = createPlaylistName();

  $.playlist_name().innerText = getStore().create.playlist.name;
  $.playlist_owner().innerText = getStore().user.display_name;
  $.playlist_owner().href = getStore().user.external_urls.spotify;

  if (!store.selected.track) store.selected.track = $.playlist_track();

  $.playlist_tracks().forEach(($track) => $track.remove());

  store.create.playlist.tracks.forEach(printPlaylistTrack);

  setPlaylistImage();

  function showElements() {
    displaySection("save_playlist", "block");
  }

  loadingComplete(showElements);
}

import { printPlaylistTrack } from "~scripts/services";
import {
  createPlaylistName,
  outPlaylistExcess,
  inPlaylistExcess,
  displaySection,
  loadingComplete,
} from "~scripts/helpers";

import $ from "~scripts/selectors";
import store from "~data/store";

export default function (tracks) {
  store.create.playlist.tracks = tracks.filter(outPlaylistExcess);
  store.create.playlist.excess = tracks.filter(inPlaylistExcess);

  store.create.playlist.name = createPlaylistName();

  $.playlist_name().innerText = store.create.playlist.name;
  $.playlist_owner().innerText = store.user.display_name;
  $.playlist_owner().href = store.user.external_urls.spotify;

  if (!store.saved.track) store.saved.track = $.playlist_track();

  $.playlist_tracks().forEach(($track) => $track.remove());

  store.create.playlist.tracks.forEach(printPlaylistTrack);

  function showElements() {
    displaySection("save_playlist", "block");
  }

  loadingComplete(showElements);
}

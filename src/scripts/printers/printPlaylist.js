import $ from "~scripts/selectors";

import getStore from "~scripts/store/getStore";

import { printPlaylistTrack } from "~scripts/printers";

import { create, displaySection, loading } from "~scripts/helpers";

import { setPlaylistImage } from "~scripts/setters";

import setStore from "~scripts/store/setStore";

// import include from "~scripts/filters/include";

// import exclude from "~scripts/filters/exclude";

export default function (tracks) {
  setStore(function (store) {
    store.create.playlist.tracks = tracks;

    // store.create.playlist.tracks = tracks.filter(exclude.playlistExcess);

    // store.create.playlist.excess = tracks.filter(include.playlistExcess);

    store.create.playlist.name = create.playlistName();

    $.playlist_name().innerText = getStore().create.playlist.name;
    $.playlist_owner().innerText = getStore().user.display_name;
    $.playlist_owner().href = getStore().user.external_urls.spotify;

    if (!store.selected.track) store.selected.track = $.playlist_track();

    $.playlist_tracks().forEach(($track) => $track.remove());

    store.create.playlist.tracks.forEach(printPlaylistTrack);

    setPlaylistImage();

    return store;
  });

  function showElements() {
    displaySection("save_playlist", "block");
  }

  loading.complete(showElements);
}

import $ from "~scripts/selectors";

import { printPlaylistTrack, printPlaylistImage } from "~scripts/printers";

import setStore from "~scripts/store/setStore";

// import include from "~scripts/filters/include";

// import exclude from "~scripts/filters/exclude";

export default function (tracks) {
  setStore(function (store) {
    let { user, playlist } = store;

    let name = playlist.name;
    let description = playlist.description;

    store.playlist.name = name;
    store.playlist.description = description;
    store.playlist.tracks = tracks;
    // store.playlist.tracks = tracks.filter(exclude.playlistExcess);
    // store.playlist.excess = tracks.filter(include.playlistExcess);

    $.playlist_name().innerText = name;
    $.playlist_owner().innerText = user.display_name;
    $.playlist_owner().href = user.external_urls.spotify;

    return store;
  });

  printPlaylistImage();

  let template = $.playlist_track();

  $.playlist_tracks().forEach(($track) => $track.remove());

  tracks.forEach((track, index) => printPlaylistTrack(track, index, template));
}

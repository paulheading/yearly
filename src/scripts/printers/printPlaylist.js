import $ from "~scripts/selectors";

import { printPlaylistTrack, printPlaylistImage } from "~scripts/printers";

import setStore from "~scripts/setters/setStore";
import createPlaylist from "~scripts/creators/createPlaylist";

// import include from "~scripts/filters/include";
// import exclude from "~scripts/filters/exclude";

export default function (tracks) {
  setStore(function (store) {
    store.playlist.name = createPlaylist.name;
    store.playlist.description = createPlaylist.description;
    store.playlist.tracks = tracks;

    // store.playlist.tracks = tracks.filter(exclude.playlistExcess);
    // store.playlist.excess = tracks.filter(include.playlistExcess);

    $.playlist().$name.innerText = createPlaylist.name;
    $.playlist().$owner.innerText = store.user.id;
    $.playlist().$owner.href = store.user.external_urls.spotify;

    return store;
  });

  // printPlaylistImage();

  let template = $.playlist().$track;

  $.playlist().$tracks.forEach(($track) => $track.remove());

  tracks.forEach(function (track, index) {
    return printPlaylistTrack(track, index, template);
  });
}

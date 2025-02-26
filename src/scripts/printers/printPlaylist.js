import $ from "~scripts/selectors";

import { printPlaylistTrack, printPlaylistImage } from "~scripts/printers";

import setStore from "~scripts/store/setStore";
import create from "~scripts/helpers/create";

// import include from "~scripts/filters/include";
// import exclude from "~scripts/filters/exclude";

let { playlist } = create;

export default function (tracks) {
  setStore(function (store) {
    store.playlist.name = playlist.name;
    store.playlist.description = playlist.description;
    store.playlist.tracks = tracks;

    // store.playlist.tracks = tracks.filter(exclude.playlistExcess);
    // store.playlist.excess = tracks.filter(include.playlistExcess);

    $.playlist().$name.innerText = playlist.name;
    $.playlist().$owner.innerText = store.user.id;
    $.playlist().$owner.href = store.user.external_urls.spotify;

    return store;
  });

  printPlaylistImage();

  let template = $.playlist().$track;

  $.playlist().$tracks.forEach(($track) => $track.remove());

  tracks.forEach(function (track, index) {
    return printPlaylistTrack(track, index, template);
  });
}

import $ from "~scripts/selectors";
import asyncWrap from "~scripts/helpers/asyncWrap";
import setStore from "~scripts/setters/setStore";
import printPlaylistTrack from "~scripts/printers/printPlaylistTrack";
import printPlaylistImage from "~scripts/printers/printPlaylistImage";
import createPlaylist from "~scripts/creators/createPlaylist";

function playlistData(store, tracks) {
  let { name, description } = createPlaylist;

  store.playlist.name = name;
  store.playlist.description = description;
  store.playlist.tracks = tracks;

  $.playlist().$name.innerText = name;
  $.playlist().$owner.innerText = store.user.id;
  $.playlist().$owner.href = store.user.external_urls.spotify;

  return store;
}

export default function (tracks) {
  asyncWrap(() => setStore((store) => playlistData(store, tracks)))
    .then(printPlaylistImage)
    .then(function () {
      let template = $.playlist().$track;

      $.playlist().$tracks.forEach(($track) => $track.remove());

      tracks.forEach(function (track, index) {
        return printPlaylistTrack(track, index, template);
      });
    });
}

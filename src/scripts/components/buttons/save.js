import $ from "~scripts/selectors";
import { getData, postData } from "~scripts/services";
import store from "~data/store";

import { loadingComplete, loadingCurrently } from "~scripts/helpers";

function postPlaylistData() {
  let playlist = {
    path: "users/" + store.user.id + "/playlists",
    details: {
      name: store.selected.playlist.name,
      description: "Yearly generated playlist",
      public: false,
    },
  };
  return postData(playlist.path, { ...playlist.details });
}

function postTrackData(playlist) {
  let tracks = {
    path: "playlists/" + playlist.id + "/tracks",
    uris: store.selected.playlist.tracks.map(({ track }) => track.uri),
  };
  return postData(tracks.path, { uris: tracks.uris });
}

function hideElements() {
  $.sections.save_playlist.style.display = "none";
}

function showElements() {
  $.sections.share_playlist.style.display = "initial";
}

function saveButtonClick() {
  loadingCurrently(hideElements);
  postPlaylistData()
    .then(postTrackData)
    .then(function () {
      getData(`users/${store.user.id}/playlists`).then(function ({ items }) {
        let foundPlaylist = false;
        let index = 0;
        let playlist = {};

        while (!foundPlaylist) {
          if (items[index].name == store.selected.playlist.name) {
            playlist = items[index];
            foundPlaylist = true;
          } else {
            index++;
          }
        }

        $.print.share_link.innerText = playlist.external_urls.spotify;
        $.print.share_link.href = playlist.external_urls.spotify;
      });
    })
    .then(function () {
      loadingComplete(showElements);
    });
}

export default function () {
  $.buttons.save.addEventListener("click", saveButtonClick);
}

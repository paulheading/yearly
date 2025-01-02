import $ from "~scripts/selectors";
import get from "~scripts/getters";
import store from "~data/store";

import {
  displaySection,
  loadingComplete,
  loadingCurrently,
  postData,
} from "~scripts/helpers";

function postPlaylistData() {
  let playlist = {
    path: "users/" + store.user.id + "/playlists",
    details: {
      name: store.create.playlist.name,
      description: "Yearly generated playlist",
      public: false,
    },
  };
  return postData(playlist.path, { ...playlist.details });
}

function postTrackData(playlist) {
  let tracks = {
    path: "playlists/" + playlist.id + "/tracks",
    uris: store.create.playlist.tracks.map(({ track }) => track.uri),
  };
  return postData(tracks.path, { uris: tracks.uris });
}

function hideElements() {
  displaySection("save_playlist", "none");
}

function showElements() {
  displaySection("share_playlist", "block");
}

function saveButtonClick() {
  loadingCurrently(hideElements);
  postPlaylistData()
    .then(postTrackData)
    .then(function () {
      get.data(`users/${store.user.id}/playlists`).then(function ({ items }) {
        let foundPlaylist = false;
        let index = 0;
        let playlist = {};

        while (!foundPlaylist) {
          if (items[index].name == store.create.playlist.name) {
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

import $ from "~scripts/selectors";
import { displaySection, loading, postData } from "~scripts/helpers";
import { getData, getStore } from "~scripts/getters";

function postPlaylistData() {
  let playlist = {
    path: "users/" + getStore().user.id + "/playlists",
    details: {
      name: getStore().create.playlist.name,
      description: "Yearly generated playlist",
      public: false,
    },
  };
  return postData(playlist.path, { ...playlist.details });
}

function postTrackData(playlist) {
  let tracks = {
    path: "playlists/" + playlist.id + "/tracks",
    uris: getStore().create.playlist.tracks.map(({ track }) => track.uri),
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
  loading.currently(hideElements);
  postPlaylistData()
    .then(postTrackData)
    .then(function () {
      getData(`users/${getStore().user.id}/playlists`).then(function ({
        items,
      }) {
        let foundPlaylist = false;
        let index = 0;
        let playlist = {};

        while (!foundPlaylist) {
          if (items[index].name == getStore().create.playlist.name) {
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
      loading.complete(showElements);
    });
}

export default function () {
  $.button.save.addEventListener("click", saveButtonClick);
}

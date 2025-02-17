import $ from "~scripts/selectors";
import loadInProgress from "~scripts/loaders/loadInProgress";
import loadComplete from "~scripts/loaders/loadComplete";

import { displaySection } from "~scripts/helpers";
import { getData } from "~scripts/getters";

import getStore from "~scripts/store/getStore";
import postPlaylistData from "~scripts/posters/postPlaylistData";
import postTrackData from "~scripts/posters/postTrackData";

function saveButtonClick() {
  loadInProgress(function () {
    displaySection("save_playlist", "none");
  });

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
      loadComplete(function () {
        displaySection("share_playlist", "block");
      });
    });
}

export default function () {
  $.button.save.addEventListener("click", saveButtonClick);
}

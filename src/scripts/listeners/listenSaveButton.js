import $ from "~scripts/selectors";
import loadInProgress from "~scripts/loaders/loadInProgress";
import loadComplete from "~scripts/loaders/loadComplete";

import displaySection from "~scripts/helpers/displaySection";
import postPlaylistData from "~scripts/posters/postPlaylistData";
import postTrackData from "~scripts/posters/postTrackData";
import getSavedPlaylistDetails from "~scripts/getters/getSavedPlaylistDetails";
import getStoreState from "~scripts/getters/getStoreState";
import putPlaylistCover from "~scripts/putters/putPlaylistCover";

let hideSections = ["save_playlist", "tracks_added"];

function saveButtonClick() {
  loadInProgress(function () {
    hideSections.forEach(function (item) {
      displaySection(item, "none");
    });
  });

  postPlaylistData()
    .then(postTrackData)
    .then(getSavedPlaylistDetails)
    .then(function (playlist) {
      putPlaylistCover(playlist);

      let { external_urls } = playlist;
      let { spotify } = external_urls;
      let { share_link } = $.print;

      share_link.innerText = spotify.replace("https://", "");
      share_link.href = spotify;
    })
    .then(function () {
      loadComplete(function () {
        displaySection("share_playlist", "block");
      });
    })
    .then(getStoreState);
}

export default function () {
  $.button.save.addEventListener("click", saveButtonClick);
}

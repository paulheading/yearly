import $ from "#selectors";
import loadInProgress from "#loaders/loadInProgress";
import loadComplete from "#loaders/loadComplete";

import displaySection from "#display/displaySection";
import postPlaylistData from "#posters/postPlaylistData";
import postTrackData from "#posters/postTrackData";
import getSavedPlaylistDetails from "#getters/spotify/getSavedPlaylistDetails";
import getStoreState from "#getters/getStoreState";
import putPlaylistCover from "#putters/putPlaylistCover";
import data from "#selectors/data";

let sections = [
  data.section.save_playlist,
  data.section.tracks_added,
  data.section.confirm_settings,
];

function saveButtonClick() {
  loadInProgress(function () {
    sections.forEach((item) => displaySection(item, "none"));
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
        displaySection(data.section.share_playlist, "block");
      });
    })
    .then(getStoreState);
}

export default function () {
  $.button.save.addEventListener("click", saveButtonClick);
}

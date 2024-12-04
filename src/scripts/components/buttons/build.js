import { getTracks } from "~scripts/services";

import $ from "~scripts/selectors";
import store from "~data/store";

import {
  byContentType,
  byLowestPopularity,
  byPlaylistId,
  createPlaylistName,
  loadingComplete,
  loadingCurrently,
} from "~scripts/helpers";

function buildButtonClick() {
  if (!store.selected.id) return;

  function hideElements() {
    $.sections.choose_card.style.display = "none";
  }

  loadingCurrently(hideElements);

  let playlist =
    store.selected.id != "custom"
      ? store.cards.playlists.filter(byPlaylistId)[0]
      : store.cards.custom;

  let config = playlist.content.filter(byContentType);

  if (!config.length > 0) {
    return console.error("config array has no length: ", config);
  }

  config = config[0].copy;

  getTracks(displayResults);
}

function cloneTrack(index) {
  let $track = $.playlist_track().cloneNode(true);
  let $number = $track.querySelector(".number");
  $number.innerText = index + 1;
  $.playlist_main().append($track);
}

function printPlaylistTrack(item, index) {
  if (index > 0) cloneTrack(index);

  let $track = $.playlist_tracks()[index];

  let $track_name = $track.querySelector(".track-name");
  let $artist_name = $track.querySelector(".artist-name");

  $track_name.innerText = item.track.name;
  $artist_name.innerText = item.track.artists[0].name;
  $artist_name.href = item.track.artists[0].external_urls.spotify;
}

function displayResults(tracks) {
  if (tracks.length == 0) {
    function showElements() {
      $.sections.empty_playlist.style.display = "initial";
    }

    return loadingComplete(showElements);
  }

  tracks = tracks.filter((_, index) => index < 10);
  tracks = tracks.sort(byLowestPopularity);

  store.selected.playlist.name = createPlaylistName();
  store.selected.playlist.tracks = tracks;

  $.playlist_name().innerText = store.selected.playlist.name;
  $.playlist_owner().innerText = store.user.display_name;
  $.playlist_owner().href = store.user.external_urls.spotify;

  store.selected.playlist.tracks.forEach(printPlaylistTrack);

  function showElements() {
    $.sections.save_playlist.style.display = "initial";
  }

  loadingComplete(showElements);
}

export default function () {
  $.buttons.build.addEventListener("click", buildButtonClick);
}

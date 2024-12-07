import {
  getPlaylistConfig,
  getRecommends,
  getTracks,
  printPlaylist,
} from "~scripts/services";

import $ from "~scripts/selectors";
import store from "~data/store";
import {
  discovered_this_year,
  include_recommends,
  released_this_year,
  exclude_recommends,
  fewest_plays,
} from "~data/playlist_settings";

import {
  displaySection,
  loadingComplete,
  loadingCurrently,
} from "~scripts/helpers";

function buildButtonClick() {
  if (!store.style) return;

  function hideElements() {
    displaySection("choose_card", "none");
    displaySection("tracks_added", "block");
  }

  loadingCurrently(hideElements);

  getTracks(displayResults);

  console.log("store: ", store);
}

function handleEmptyPlaylist() {
  function showElements() {
    displaySection("empty_playlist", "block");
  }

  return loadingComplete(showElements);
}

function getPlaylistRecommends(tracks) {
  let recommends = tracks.forEach(({ track }) => track.id + ",");

  recommends = recommends.slice(0, -1);

  // getRecommends(recommends);

  // getRecommends("seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA");

  function showElements() {
    displaySection("recommend_tracks", "block");
  }

  loadingComplete(showElements);
}

function displayResults(tracks) {
  // tracks = tracks.filter((_, index) => index < 1);

  if (tracks.length == 0) handleEmptyPlaylist();
  else if (tracks.length < 10) getPlaylistRecommends(tracks);

  getPlaylistConfig().forEach(function (setting) {
    if (setting == discovered_this_year) {
      console.log("matched: ", discovered_this_year);
    }
    if (setting == include_recommends) {
      console.log("matched: ", include_recommends);
    }
    if (setting == released_this_year) {
      console.log("matched: ", released_this_year);
    }
    if (setting == exclude_recommends) {
      console.log("matched: ", exclude_recommends);
    }
    if (setting == fewest_plays) {
      console.log("matched: ", fewest_plays);
    }
  });

  printPlaylist(tracks);
}

export default function () {
  $.buttons.build.addEventListener("click", buildButtonClick);
}

import {
  getPlaylistConfig,
  getRecommends,
  getTracks,
  printPlaylist,
} from "~scripts/services";

import {
  include_recommends,
  least_popular,
  most_popular,
  released_this_year,
} from "~data/settings";

import {
  byLowestPopularity,
  byHighestPopularity,
  displaySection,
  loadingComplete,
  loadingCurrently,
  releasedThisYear,
} from "~scripts/helpers";

import $ from "~scripts/selectors";

import store from "~data/store";

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

function displayResults(items) {
  // items = items.filter((_, index) => index < 1);

  if (items.length == 0) handleEmptyPlaylist();
  else if (items.length < 10) getPlaylistRecommends(items);

  console.log("config: ", getPlaylistConfig());

  getPlaylistConfig().forEach(function ({ title, value }) {
    if (!value) return;

    if (title == include_recommends) {
      console.log("matched: ", include_recommends);
    }
    if (title == released_this_year) {
      console.log("matched: ", released_this_year);
      items = items.filter((item) => releasedThisYear(item));
    }
    if (title == least_popular) {
      console.log("matched: ", least_popular);
      items = items.sort(byLowestPopularity);
    }
    if (title == most_popular) {
      console.log("matched: ", most_popular);
      items = items.sort(byHighestPopularity);
    }
  });

  console.log("items: ", items);

  printPlaylist(items);
}

export default function () {
  $.buttons.build.addEventListener("click", buildButtonClick);
}

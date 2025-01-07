import $ from "~scripts/selectors";
import print from "~scripts/print";
import store from "~data/store";
import tracks from "~data/tracks";

import {
  in_explicit,
  in_popular,
  in_recommends,
  max_length,
  min_length,
  out_explicit,
  out_popular,
  released_this_year,
} from "~data/settings";

import {
  inExplicit,
  outExplicit,
  minimumLength,
  maximumLength,
  matchYear,
} from "~scripts/filters";

import { byLowestPopularity, byHighestPopularity } from "~scripts/sort";

import {
  usingLiveData,
  displaySection,
  loadingComplete,
  loadingCurrently,
} from "~scripts/helpers";
import { getPlaylistConfig, getRecommends, getTracks } from "~scripts/getters";

function buildButtonClick() {
  if (!store.create.playlist.style) return;

  function hideElements() {
    displaySection("choose_card", "none");
    displaySection("tracks_added", "block");
  }

  loadingCurrently(hideElements);

  usingLiveData
    ? getTracks(displayResults, store.selected.year)
    : displayResults(tracks);
}

function handleEmptyPlaylist() {
  function showElements() {
    displaySection("empty_playlist", "block");
  }

  return loadingComplete(showElements);
}

function getPlaylistRecommends(tracks) {
  console.log("find recommends for: ", tracks);

  // let recommends = tracks.forEach(({ track }) => track.id + ",");

  // recommends = recommends.slice(0, -1);

  // getRecommends(recommends);

  // getRecommends(
  //   "seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA"
  // );

  function showElements() {
    displaySection("recommend_tracks", "block");
  }

  loadingComplete(showElements);
}

function displayResults(items) {
  if (items.length == 0) return handleEmptyPlaylist();

  if (items.length < 10) getPlaylistRecommends(items);

  getPlaylistConfig().forEach(function ({ title, value }) {
    if (!value) return;

    console.log("title: ", title);

    if (title == in_recommends) {
      console.log("matched: ", in_recommends);
    }

    if (title == released_this_year) {
      console.log("matched: ", released_this_year);

      items = items.filter(function ({ track }) {
        let { album } = track;
        return matchYear(album.release_date, store.selected.year);
      });
    }

    if (title == out_popular) {
      console.log("matched: ", out_popular);

      items = items.sort(byLowestPopularity);
    }

    if (title == in_popular) {
      console.log("matched: ", in_popular);

      items = items.sort(byHighestPopularity);
    }

    if (title == in_explicit) {
      console.log("matched: ", in_explicit);

      items = items.filter(inExplicit);
    }

    if (title == out_explicit) {
      console.log("matched: ", out_explicit);

      items = items.filter(outExplicit);
    }

    if (title == min_length) {
      console.log("matched: ", min_length);

      items = items.filter((item) => minimumLength(item, value));
    }

    if (title == max_length) {
      console.log("matched: ", max_length);

      items = items.filter((item) => maximumLength(item, value));
    }
  });

  print.playlist(items);
}

export default function () {
  $.buttons.build.addEventListener("click", buildButtonClick);
}

import $ from "~scripts/selectors";
import store from "~data/store";
import tracks from "~data/tracks";
import settings from "~data/settings";

import {
  inExplicit,
  outExplicit,
  minimumLength,
  maximumLength,
  matchYear,
} from "~scripts/filters";

import { byLowestPopularity, byHighestPopularity } from "~scripts/sorters";

import {
  usingLiveData,
  displaySection,
  loadingComplete,
  loadingCurrently,
} from "~scripts/helpers";

import { getPlaylistConfig, getRecommends, getTracks } from "~scripts/getters";

import { printPlaylist } from "~scripts/printers";

import { resetCustomConfig } from "~scripts/setters";

function buildButtonClick() {
  if (!store.create.playlist.style) return;

  let styleIsNotCustom = store.create.playlist.style != "custom";

  if (styleIsNotCustom) resetCustomConfig();

  function hideElements() {
    displaySection("choose_card", "none");
    displaySection("tracks_added", "block");
  }

  loadingCurrently(hideElements);

  usingLiveData ? getTracks(displayResults) : displayResults(tracks);
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
  if (items.length) {
    getPlaylistConfig().forEach(function ({ title, value }) {
      if (!value) return;

      console.log("title: ", title);

      if (title == settings.in_recommends) {
      }

      if (title == settings.released_this_year) {
        items = items.filter(function ({ track }) {
          let { album } = track;
          return matchYear(album.release_date, store.selected.year);
        });
      }

      if (title == settings.out_popular) {
        items = items.sort(byLowestPopularity);
      }

      if (title == settings.in_popular) {
        items = items.sort(byHighestPopularity);
      }

      if (title == settings.in_explicit) {
        items = items.filter(inExplicit);
      }

      if (title == settings.out_explicit) {
        items = items.filter(outExplicit);
      }

      if (title == settings.min_length) {
        items = items.filter((item) => minimumLength(item, value));
      }

      if (title == settings.max_length) {
        items = items.filter((item) => maximumLength(item, value));
      }

      if (title == settings.released_this_year) {
        items = items.filter(({ added_at }) =>
          matchYear(added_at, store.selected.year)
        );
      }
    });
  }

  if (!items.length) return handleEmptyPlaylist();

  if (items.length < 10) getPlaylistRecommends(items);

  printPlaylist(items);
}

export default function () {
  $.buttons.build.addEventListener("click", buildButtonClick);
}

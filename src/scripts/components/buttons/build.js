import $ from "~scripts/selectors";
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

import { usingLiveData, displaySection, loading, is } from "~scripts/helpers";

import {
  getPlaylistConfig,
  getPlaylistRecommends,
  getTracks,
  getDate,
  getStore,
} from "~scripts/getters";

import { printPlaylist, printYearAdded } from "~scripts/printers";

import { resetCustomConfig } from "~scripts/setters";

import getYearAdded from "~scripts/getters/getYearAdded";
import getYearReleased from "~scripts/getters/getYearReleased";

function buildButtonClick() {
  if (!getStore().create.playlist.style) {
    return console.error("this playlist needs a style");
  }

  if (!is.playlistStyleCustom()) resetCustomConfig();

  function hideElements() {
    displaySection("choose_card", "none");
    displaySection("tracks_added", "block");
  }

  loading.currently(hideElements);

  printYearAdded();

  usingLiveData ? getTracks(displayResults) : displayResults(tracks);
}

function handleEmptyPlaylist() {
  function showElements() {
    displaySection("empty_playlist", "block");
  }

  return loading.complete(showElements);
}

function displayResults(items) {
  console.log("results: ", items);

  console.log("year added: ", getYearAdded());
  console.log("year released: ", getYearReleased());

  if (items.length) {
    // console.log("config: ", getPlaylistConfig());

    getPlaylistConfig().forEach(function ({ title, value }) {
      // if (title == settings.in_recommends) {}

      // if (title == settings.out_popular) {
      //   items = items.sort(byLowestPopularity);
      // }

      // if (title == settings.in_popular) {
      //   items = items.sort(byHighestPopularity);
      // }

      // if (title == settings.in_explicit) {
      //   items = items.filter(inExplicit);
      // }

      // if (title == settings.out_explicit) {
      //   items = items.filter(outExplicit);
      // }

      // if (title == settings.min_length) {
      //   items = items.filter((item) => minimumLength(item, value));
      // }

      // if (title == settings.max_length) {
      //   items = items.filter((item) => maximumLength(item, value));
      // }

      if (title == settings.year_released) {
        items = items.filter(({ track }) => {
          let { album } = track;
          let release_year = album.release_date.slice(0, 4);

          return release_year == value;
        });
      }
    });
  }

  if (items.length < 10) getPlaylistRecommends(items);

  if (!items.length) return handleEmptyPlaylist();

  printPlaylist(items);
}

export default function () {
  $.buttons.build.addEventListener("click", buildButtonClick);
}

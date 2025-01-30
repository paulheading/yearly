import $ from "~scripts/selectors";
import tracks from "~data/tracks";
import settings from "~data/settings";

import include from "~scripts/filters/include";
import exclude from "~scripts/filters/exclude";
import length from "~scripts/filters/length";

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

      // if (title == settings.least_popular_music) {
      //   items = items.sort(byLowestPopularity);
      // }

      // if (title == settings.most_popular_music) {
      //   items = items.sort(byHighestPopularity);
      // }

      // if (title == settings.explicit_music_only) {
      //   items = items.filter(include.trackExplicit);
      // }

      // if (title == settings.no_explicit_music) {
      //   items = items.filter(exclude.trackExplicit);
      // }

      // if (title == settings.min_length) {
      //   items = items.filter((item) => length.trackMinimum(item, value));
      // }

      // if (title == settings.max_length) {
      //   items = items.filter((item) => length.trackMaximum(item, value));
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
  $.button.build.addEventListener("click", buildButtonClick);
}

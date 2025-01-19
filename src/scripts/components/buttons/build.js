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
  playlistStyleIsCustom,
} from "~scripts/helpers";

import {
  getPlaylistConfig,
  getPlaylistRecommends,
  getTracks,
  getDate,
} from "~scripts/getters";

import { printPlaylist, printYearAdded } from "~scripts/printers";

import { setSource, resetCustomConfig, setYearAdded } from "~scripts/setters";

function buildButtonClick() {
  if (!store.create.playlist.style) {
    return console.error("this playlist needs a style");
  }

  if (!playlistStyleIsCustom()) resetCustomConfig();

  function hideElements() {
    displaySection("choose_card", "none");
    displaySection("tracks_added", "block");
  }

  loadingCurrently(hideElements);

  setSource();

  playlistStyleIsCustom() ? setYearAdded() : setYearAdded(getDate().year);

  printYearAdded();

  usingLiveData ? getTracks(displayResults) : displayResults(tracks);
}

function handleEmptyPlaylist() {
  function showElements() {
    displaySection("empty_playlist", "block");
  }

  return loadingComplete(showElements);
}

function displayResults(items) {
  console.log("results: ", items);

  if (items.length) {
    getPlaylistConfig().forEach(function ({ title, value }) {
      if (!value) return;

      console.log("title: ", title);

      // if (title == settings.in_recommends) {}

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

  if (items.length < 10) getPlaylistRecommends(items);

  if (!items.length) return handleEmptyPlaylist();

  printPlaylist(items);
}

export default function () {
  $.buttons.build.addEventListener("click", buildButtonClick);
}

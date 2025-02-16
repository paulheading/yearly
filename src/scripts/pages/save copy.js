import checkStoreExists from "~scripts/store/checkStoreExists";
import settings from "~data/settings";
import tracks from "~data/tracks";

import { usingLiveData, displaySection, loading } from "~scripts/helpers";
import {
  printPlaylist,
  printTracksAdded,
  printYearAdded,
} from "~scripts/printers";
import { include, exclude, length } from "~scripts/filters";
import { byLowestPopularity, byHighestPopularity } from "~scripts/sorters";
import {
  getPlaylistConfig,
  getPlaylistRecommends,
  getTracks,
} from "~scripts/getters";

checkStoreExists();

loading.currently(function () {
  displaySection("tracks_added", "block");
});

printYearAdded();

function simulateLoading(tracks) {
  let total = 0;
  let mismatch = true;

  console.log("simulating loading");

  // while (mismatch) {
  //   total = total + 20;

  //   setTimeout(function () {
  //     console.log("total: ", total);
  //     mismatch = false;
  //   }, 500);
  // }

  // while (mismatch) {
  //   setTimeout(function () {
  //     total = total + 20;

  //     mismatch = tracks.length >= total;

  //     console.log(total, tracks.length, mismatch);

  //     // printTracksAdded(mismatch ? total : tracks.length);
  //   }, 500);
  // }

  displayResults(tracks);
}

usingLiveData ? getTracks(displayResults) : simulateLoading(tracks);

function handleEmptyPlaylist() {
  return loading.complete(function () {
    displaySection("empty_playlist", "block");
  });
}

function displayResults(items) {
  if (items.length) {
    getPlaylistConfig().forEach(function ({ title, value }) {
      console.log(title, "value: ", value);

      if (!value) return;

      // if (title == settings.in_recommends) {
      // }

      if (title == settings.least_popular_music) {
        items = items.sort(byLowestPopularity);
      }

      if (title == settings.most_popular_music) {
        items = items.sort(byHighestPopularity);
      }

      if (title == settings.explicit_music_only) {
        items = items.filter(include.trackExplicit);
      }

      if (title == settings.no_explicit_music) {
        items = items.filter(exclude.trackExplicit);
      }

      if (title == settings.min_length) {
        items = items.filter((item) => length.trackMinimum(item, value));
      }

      if (title == settings.max_length) {
        items = items.filter((item) => length.trackMaximum(item, value));
      }

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

  // loading.complete(function () {
  //   displaySection("save_playlist", "block");
  // });
}

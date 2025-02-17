import settings from "~data/settings";

import getPlaylistConfig from "~scripts/getters/getPlaylistConfig";
import getPlaylistRecommends from "~scripts/getters/getPlaylistRecommends";
import printPlaylist from "~scripts/printers/printPlaylist";
import loadComplete from "~scripts/loaders/loadComplete";
import displaySection from "~scripts/helpers/displaySection";

import { length, include, exclude } from "~scripts/filters";
import { byLowestPopularity, byHighestPopularity } from "~scripts/sorters";

export default function (items) {
  if (!items.length) {
    alert("got no songs");
    return;
  }

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

  if (items.length < 10) getPlaylistRecommends(items);

  printPlaylist(items);

  loadComplete(function () {
    displaySection("save_playlist", "block");
  });
}

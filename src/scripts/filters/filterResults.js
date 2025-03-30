import settings from "~data/settings";
import filterTracksByReleaseDate from "~scripts/filters/filterTracksByReleaseDate";

import { length, include, exclude } from "~scripts/filters";
import { byLowestPopularity, byHighestPopularity } from "~scripts/sorters";

import getDate from "~scripts/getters/getDate";
import getPlaylistActiveConfig from "~scripts/getters/getPlaylistActiveConfig";

export default async function (items) {
  if (!items.length) return items;

  getPlaylistActiveConfig().forEach(function ({ title, value }) {
    console.log(title, "value: ", value);

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

    if (title == settings.released_this_year) {
      let { year } = getDate();
      items = filterTracksByReleaseDate({ items, value: year });
    }

    if (title == settings.year_released) {
      items = filterTracksByReleaseDate({ items, value });
    }
  });

  return items;
}

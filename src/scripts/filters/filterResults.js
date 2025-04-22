import settings from "~data/settings";
import filterTracksByReleaseDate from "~scripts/filters/filterTracksByReleaseDate";

import { length, include, exclude } from "~scripts/filters";
import { byLowestPopularity, byHighestPopularity } from "~scripts/sorters";

import getDate from "~scripts/getters/getDate";
import getPlaylistActiveConfig from "~scripts/getters/getPlaylistActiveConfig";
import getStore from "~scripts/getters/getStore";

export default async function () {
  let { results } = getStore().get_tracks;

  if (!results.length) {
    console.warn("store has no results");
    return results;
  }

  getPlaylistActiveConfig().forEach(function ({ title, value }) {
    console.log(title, "value: ", value);

    if (title == settings.least_popular_music) {
      results = results.sort(byLowestPopularity);
    }

    if (title == settings.most_popular_music) {
      results = results.sort(byHighestPopularity);
    }

    if (title == settings.explicit_music_only) {
      results = results.filter(include.trackExplicit);
    }

    if (title == settings.no_explicit_music) {
      results = results.filter(exclude.trackExplicit);
    }

    if (title == settings.min_length) {
      results = results.filter((item) => length.trackMinimum(item, value));
    }

    if (title == settings.max_length) {
      results = results.filter((item) => length.trackMaximum(item, value));
    }

    if (title == settings.released_this_year) {
      let { year } = getDate();
      results = filterTracksByReleaseDate({ results, value: year });
    }

    if (title == settings.year_released) {
      results = filterTracksByReleaseDate({ results, value });
    }
  });

  return results;
}

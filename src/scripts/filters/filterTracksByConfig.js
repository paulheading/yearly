import settings from "~data/settings";
import filterTracksByReleaseDate from "~scripts/filters/filterTracksByReleaseDate";

import { length, include, exclude } from "~scripts/filters";
import { byLowestPopularity, byHighestPopularity } from "~scripts/sorters";

import getDate from "~scripts/getters/getDate";
import getPlaylistActiveConfig from "~scripts/getters/getPlaylistActiveConfig";

export default function (tracks) {
  getPlaylistActiveConfig().forEach(function ({ title, value }) {
    console.log(title, "value: ", value);

    if (title == settings.least_popular_music) {
      tracks = tracks.sort(byLowestPopularity);
    }

    if (title == settings.most_popular_music) {
      tracks = tracks.sort(byHighestPopularity);
    }

    if (title == settings.explicit_music_only) {
      tracks = tracks.filter(include.trackExplicit);
    }

    if (title == settings.no_explicit_music) {
      tracks = tracks.filter(exclude.trackExplicit);
    }

    if (title == settings.min_length) {
      tracks = tracks.filter((item) => length.trackMinimum(item, value));
    }

    if (title == settings.max_length) {
      tracks = tracks.filter((item) => length.trackMaximum(item, value));
    }

    if (title == settings.released_this_year) {
      let { year } = getDate();
      tracks = filterTracksByReleaseDate({ tracks, value: year });
    }

    if (title == settings.year_released) {
      tracks = filterTracksByReleaseDate({ tracks, value });
    }
  });

  return tracks;
}

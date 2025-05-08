import getUsersSavedTracks from "#getters/spotify/getUsersSavedTracks";
import setTracksAdded from "#setters/setTracksAdded";
import getYearAdded from "#getters/getYearAdded";
import setUniqueTrack from "#setters/setUniqueTrack";

import { loop } from "#getters/getTracks";

export default async function () {
  let year_added = getYearAdded();
  let results = [];

  while (loop.continue) {
    let { items } = await getUsersSavedTracks(loop.offset);

    let callback = function () {
      loop.continue = false;
    };

    let tracks = setTracksAdded({ items, callback, year_added });

    tracks.forEach(function (track) {
      results = setUniqueTrack(results, track);
    });

    loop.offset += loop.limit;
  }

  return results;
}

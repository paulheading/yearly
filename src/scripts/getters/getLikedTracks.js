import getUsersSavedTracks from "~scripts/getters/getUsersSavedTracks";
import setTracksAdded from "~scripts/setters/setTracksAdded";
import getYearAdded from "~scripts/getters/getYearAdded";
import setUniqueTrack from "~scripts/setters/setUniqueTrack";

import { loop } from "~scripts/getters/getTracks";

let year_added = getYearAdded();

let results = [];

export default async function () {
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

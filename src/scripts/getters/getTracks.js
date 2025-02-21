import { displaySection, is } from "~scripts/helpers";
import {
  getPlaylistItems,
  getUsersSavedTracks,
  getSource,
  getYearAdded,
} from "~scripts/getters";
import { setTracksAdded } from "~scripts/setters";

export let tracks = {
  keepGoing: true,
  results: [],
  offset: 0,
  limit: 20,
};

export default async function () {
  displaySection("tracks_added", "block");

  let year_added = getYearAdded();

  console.log("year_added: ", year_added);

  if (!is.sourceLikedSongs()) {
    let { items } = await getPlaylistItems(getSource());

    let params = { items, results: tracks.results };

    setTracksAdded(params);
  } else {
    while (tracks.keepGoing) {
      let { items } = await getUsersSavedTracks(tracks.offset);

      let callback = () => (tracks.keepGoing = false);

      let params = { items, callback, results: tracks.results, year_added };

      setTracksAdded(params);

      tracks.offset += tracks.limit;
    }
  }

  return tracks.results;
}

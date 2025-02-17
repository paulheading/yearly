import { displaySection, is } from "~scripts/helpers";
import {
  getPlaylistItems,
  getUsersSavedTracks,
  getSource,
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

  if (!is.sourceLikedSongs()) {
    let { items } = await getPlaylistItems(getSource());

    let params = { items, results: tracks.results };

    setTracksAdded(params);
  } else {
    while (tracks.keepGoing) {
      let { items } = await getUsersSavedTracks(tracks.offset);

      let callback = () => (tracks.keepGoing = false);

      let params = { items, callback, results: tracks.results };

      setTracksAdded(params);

      tracks.offset += tracks.limit;
    }
  }

  return tracks.results;
}

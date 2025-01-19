import store from "~data/store";
import { displaySection, sourceIsLikedSongs } from "~scripts/helpers";
import {
  getPlaylistItems,
  getStore,
  getUsersSavedTracks,
} from "~scripts/getters";
import { setTracksAdded } from "~scripts/setters";

export let tracks = {
  keepGoing: true,
  results: [],
  offset: 0,
  limit: 20,
};

export default async function (callback) {
  console.log("store: ", store);

  displaySection("tracks_added", "block");

  if (!sourceIsLikedSongs()) {
    let { items } = await getPlaylistItems(getStore().selected.source);

    let params = { items, results: tracks.results };

    setTracksAdded(params);
  }

  if (sourceIsLikedSongs()) {
    while (tracks.keepGoing) {
      let { items } = await getUsersSavedTracks(tracks.offset);

      let callback = () => (tracks.keepGoing = false);

      let params = { items, callback, results: tracks.results };

      setTracksAdded(params);

      tracks.offset += tracks.limit;
    }
  }

  callback(tracks.results);
}

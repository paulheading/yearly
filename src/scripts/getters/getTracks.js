import { displaySection, sourceIsLikedSongs } from "~scripts/helpers";
import store from "~data/store";
import { getPlaylistItems, getUsersSavedTracks } from "~scripts/getters";
import { setTracksAdded } from "~scripts/setters";
import { matchYear } from "~scripts/filters";

let keepGoing = true;
let offset = 0;
let limit = 20;
let results = [];
let total = 0;

export default async function (callback) {
  console.log("store: ", store);

  displaySection("tracks_added", "block");

  if (!sourceIsLikedSongs) {
    let { items } = await getPlaylistItems(store.selected.source);
    let params = { items, total, results };

    setTracksAdded(params);
  }

  if (sourceIsLikedSongs) {
    while (keepGoing) {
      let { items } = await getUsersSavedTracks(offset);

      function callback() {
        keepGoing = false;
      }

      let params = { items, callback, total, results };

      setTracksAdded(params);

      offset += limit;
    }
  }

  results = results.filter(function (item) {
    let { added_at } = item;
    return matchYear(added_at, store.selected.year);
  });

  callback(results);
}

import { displaySection } from "~scripts/helpers";
import store from "~data/store";
import { getPlaylistItems, getUsersSavedTracks } from "~scripts/getters";
import { setSource, setTracksAdded, setYearAdded } from "~scripts/setters";

let keepGoing = true;
let offset = 0;
let limit = 20;
let results = [];
let total = 0;

export default async function (callback) {
  setSource();

  let createCustomPlaylist = store.create.playlist.style == "custom";

  let userSelectedPlaylist = store.selected.source != 0;

  if (createCustomPlaylist) setYearAdded();

  console.log("store: ", store);

  displaySection("tracks_added", "block");

  if (userSelectedPlaylist) {
    let { items } = await getPlaylistItems(store.selected.source);
    let params = { items, total, results };

    setTracksAdded(params);
  }

  if (!userSelectedPlaylist) {
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

  callback(results);
}

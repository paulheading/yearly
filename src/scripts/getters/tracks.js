import get from "~scripts/getters";
import { displaySection } from "~scripts/helpers";
import { addedThisYear } from "~scripts/filters";
import $ from "~scripts/selectors";
import store from "~data/store";

let keepGoing = true;
let offset = 0;
let limit = 20;
let results = [];
let total = 0;

let printTracksAdded = (total) => ($.print.tracks_added.innerText = total);

export default async function (callback) {
  let userSelectedPlaylist = store.selected.playlist != 0;

  if (userSelectedPlaylist) {
    let { items } = await get.playlistItems(store.selected.playlist);

    callback(items);

    return;
  }

  while (keepGoing) {
    let { items } = await get.usersSavedTracks(offset);

    displaySection("tracks_added", "block");

    items.forEach(function (item) {
      if (!addedThisYear(item)) {
        keepGoing = false;
        return;
      }

      printTracksAdded(total++);

      results.push(item);
    });

    offset += limit;
  }

  callback(results);
}

import { displaySection } from "~scripts/helpers";
import { matchYear, noOlderThanYear } from "~scripts/filters";
import $ from "~scripts/selectors";
import store from "~data/store";
import { getPlaylistItems, getUsersSavedTracks } from "~scripts/getters";

let keepGoing = true;
let offset = 0;
let limit = 20;
let results = [];
let total = 0;

let printTracksAdded = (total) => ($.print.tracks_added.innerText = total);

export default async function (callback, custom_year) {
  let userSelectedPlaylist = store.selected.playlist != 0;

  if (userSelectedPlaylist) {
    let { items } = await getPlaylistItems(store.selected.playlist);

    callback(items);

    return;
  }

  while (keepGoing) {
    let { items } = await getUsersSavedTracks(offset);

    displaySection("tracks_added", "block");

    items.forEach(function (item) {
      let { added_at } = item;

      if (!noOlderThanYear(added_at, custom_year)) {
        keepGoing = false;
        return;
      }

      printTracksAdded(total++);

      results.push(item);
    });

    offset += limit;
  }

  results = results.filter(({ added_at }) => matchYear(added_at, custom_year));

  callback(results);
}

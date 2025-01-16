import $ from "~scripts/selectors";
import store from "~data/store";
import { noOlderThanYear } from "~scripts/filters";

let printTracksAdded = (total) => ($.print.tracks_added.innerText = total);

export default function ({ items, callback, total, results }) {
  items.forEach(function (item) {
    let { added_at } = item;

    if (!noOlderThanYear(added_at, store.selected.year)) {
      if (callback) callback(item);
      return;
    }

    printTracksAdded(total++);

    results.push(item);
  });
}

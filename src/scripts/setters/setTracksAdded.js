import store from "~data/store";
import { noNewerThanYear, noOlderThanYear } from "~scripts/filters";
import { printTracksAdded } from "~scripts/printers";

export default function ({ items, callback, results }) {
  items.forEach(function (item) {
    let { added_at } = item;

    if (!noOlderThanYear(added_at, store.selected.year)) {
      if (callback) callback(item);
      return;
    }

    printTracksAdded();

    if (noNewerThanYear(added_at, store.selected.year)) results.push(item);
  });
}

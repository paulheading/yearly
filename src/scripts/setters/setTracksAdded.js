import { printTracksAdded } from "~scripts/printers";
import { year } from "~scripts/filters";

export default function ({ items, callback, results, year_added }) {
  items.forEach(function (item) {
    let { added_at } = item;

    if (!year.noOlderThan(added_at, year_added)) {
      if (callback) callback(item);
      return;
    }

    printTracksAdded();

    if (!year.noNewerThan(added_at, year_added)) return;

    results.push(item);
  });
}

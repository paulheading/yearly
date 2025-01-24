import { noNewerThanYear, noOlderThanYear } from "~scripts/filters";
import getYearAdded from "~scripts/getters/getYearAdded";
import { printTracksAdded } from "~scripts/printers";

export default function ({ items, callback, results }) {
  items.forEach(function (item) {
    let { added_at } = item;

    if (!noOlderThanYear(added_at, getYearAdded())) {
      if (callback) callback(item);
      return;
    }

    printTracksAdded();

    if (noNewerThanYear(added_at, getYearAdded())) results.push(item);
  });
}

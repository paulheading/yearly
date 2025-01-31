import { getYearAdded } from "~scripts/getters";
import { printTracksAdded } from "~scripts/printers";
import { year } from "~scripts/filters";

export default function ({ items, callback, results }) {
  items.forEach(function (item) {
    let { added_at } = item;

    if (!year.noOlderThan(added_at, getYearAdded())) {
      if (callback) callback(item);
      return;
    }

    printTracksAdded();

    if (!year.noNewerThan(added_at, getYearAdded())) return;

    results.push(item);
  });
}

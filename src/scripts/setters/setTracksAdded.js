import getYearAdded from "~scripts/getters/getYearAdded";
import { printTracksAdded } from "~scripts/printers";

import year from "~scripts/filters/year";

export default function ({ items, callback, results }) {
  items.forEach(function (item) {
    let { added_at } = item;

    if (!year.noOlderThan(added_at, getYearAdded())) {
      if (callback) callback(item);
      return;
    }

    printTracksAdded();

    if (year.noNewerThan(added_at, getYearAdded())) results.push(item);
  });
}

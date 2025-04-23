import printTracksAdded from "~scripts/printers/printTracksAdded";
// import setTrackResult from "~scripts/setters/setTrackResult";
import { year } from "~scripts/filters";

let results = [];

export default function ({ items, year_added, callback }) {
  items.forEach(function (item) {
    if (!year.noOlderThan(item.added_at, year_added)) {
      if (callback) callback(item);
      return;
    }

    printTracksAdded();

    if (!year.noNewerThan(item.added_at, year_added)) return;

    results.push(item);

    // setTrackResult(item);
  });

  return results;
}

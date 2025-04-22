import printTracksAdded from "~scripts/printers/printTracksAdded";
import setTrackResult from "~scripts/setters/setTrackResult";
import { year } from "~scripts/filters";

export default function ({ items, year_added, callback }) {
  items.forEach(function (item) {
    if (!year.noOlderThan(item.added_at, year_added)) {
      if (callback) callback(item);
      return;
    }

    printTracksAdded();

    if (!year.noNewerThan(item.added_at, year_added)) return;

    setTrackResult(item);
  });
}

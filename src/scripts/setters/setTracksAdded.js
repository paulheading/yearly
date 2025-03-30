import printTracksAdded from "~scripts/printers/printTracksAdded";
import { year } from "~scripts/filters";
import setStore from "~scripts/setters/setStore";

function setTrackResults(item) {
  setStore(function (store) {
    store.get_tracks.results = [...store.get_tracks.results, item];

    return store;
  });
}

function handleYearAdded({ item, year_added, callback }) {
  let { added_at } = item;

  if (!year.noOlderThan(added_at, year_added)) {
    if (callback) callback(item);
    return;
  }

  printTracksAdded();

  if (!year.noNewerThan(added_at, year_added)) return;

  setTrackResults(item);
}

function handleItem({ item }) {
  printTracksAdded();

  setTrackResults(item);
}

export default function ({ items, callback, year_added }) {
  items.forEach((item) =>
    year_added
      ? handleYearAdded({ item, year_added, callback })
      : handleItem({ item })
  );
}

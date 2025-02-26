import { printTracksAdded } from "~scripts/printers";
import { year } from "~scripts/filters";
import setStore from "~scripts/setters/setStore";

export default function ({ items, callback, year_added }) {
  items.forEach(function (item) {
    let { added_at } = item;

    if (!year.noOlderThan(added_at, year_added)) {
      if (callback) callback(item);
      return;
    }

    printTracksAdded();

    if (!year.noNewerThan(added_at, year_added)) return;

    setStore(function (store) {
      store.get_tracks.results = [...store.get_tracks.results, item];

      return store;
    });
  });
}

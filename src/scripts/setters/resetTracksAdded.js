import { printTracksAdded } from "~scripts/printers";
import setStore from "~scripts/store/setStore";
import reset from "~data/store";

export default function () {
  printTracksAdded(0);

  setStore(function (store) {
    store.get_tracks = { ...reset.get_tracks };
    return store;
  });
}

import setStore from "~scripts/setters/setStore";
import setUniqueTrack from "~scripts/setters/setUniqueTrack";

export default function (item) {
  setStore(function (store) {
    let { tracks } = store;

    store.tracks = setUniqueTrack(tracks, item);

    return store;
  });
}

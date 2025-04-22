import setStore from "~scripts/setters/setStore";
import setUniqueTrack from "~scripts/setters/setUniqueTrack";

export default function (item) {
  setStore(function (store) {
    let { results } = store.get_tracks;

    store.get_tracks.results = setUniqueTrack(results, item);

    return store;
  });
}

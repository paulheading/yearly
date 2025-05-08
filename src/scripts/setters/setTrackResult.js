import setStore from "#setters/setStore";
import setUniqueTrack from "#setters/setUniqueTrack";

export default function (item) {
  setStore(function (store) {
    let { tracks } = store;

    store.tracks = setUniqueTrack(tracks, item);

    return store;
  });
}

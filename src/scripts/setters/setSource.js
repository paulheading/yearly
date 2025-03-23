import setStore from "~scripts/setters/setStore";

export default function (value) {
  setStore(function (store) {
    store.playlist.source = value;
    return store;
  });
}

import setStore from "~scripts/setters/setStore";

export default function ({ title, id }) {
  setStore(function (store) {
    store.playlist.source = { title, id };
    return store;
  });
}

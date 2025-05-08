import createStore from "#creators/createStore";
import getStore from "#getters/getStore";
import setStore from "#setters/setStore";

export default function (entries) {
  let valid = [];
  let invalid = [];

  if (!getStore()) createStore();

  Object.entries(entries).forEach(function ([key, value]) {
    if (key == "style") {
      valid.push({ key, value });

      setStore(function (store) {
        store.playlist.style = value;
        return store;
      });

      return;
    }

    invalid.push({ key, value });
  });

  return { valid, invalid };
}

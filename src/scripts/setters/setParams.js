import params from "~scripts/listeners/listenSearchParams";
import setStore from "~scripts/setters/setStore";

export default function () {
  if (params().valid.length) {
    // notify store of params mode
    setStore(function (store) {
      store.params = true;
      return store;
    });
  }
}

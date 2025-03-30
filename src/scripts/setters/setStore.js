import getStore from "~scripts/getters/getStore";
import createStore from "~scripts/creators/createStore";

export default function (callback) {
  let store = getStore();

  let update = callback(store);

  createStore(update);
}

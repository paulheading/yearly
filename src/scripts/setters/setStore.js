import getStore from "#getters/getStore";
import createStore from "#creators/createStore";

export default function (callback) {
  let store = getStore();

  let update = callback(store);

  createStore(update);
}

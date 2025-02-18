import getStore from "~scripts/store/getStore";
import createStore from "~scripts/store/createStore";

export default function (callback) {
  let store = getStore();

  let update = callback(store);

  createStore(update);
}

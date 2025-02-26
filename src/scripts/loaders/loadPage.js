import getStoreState from "~scripts/getters/getStoreState";

export default async function (callback) {
  getStoreState();
  callback();
}

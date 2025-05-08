import getStoreState from "#getters/getStoreState";

export default async function (callback) {
  getStoreState();
  callback();
}

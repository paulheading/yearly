import checkStoreState from "~scripts/store/checkStoreState";

export default async function (callback) {
  checkStoreState();
  callback();
}

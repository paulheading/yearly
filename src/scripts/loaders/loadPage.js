import checkStoreExists from "~scripts/store/checkStoreExists";

export default async function (callback) {
  checkStoreExists();
  callback();
}

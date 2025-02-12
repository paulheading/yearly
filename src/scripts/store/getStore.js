export default function () {
  let JSON_store = sessionStorage.getItem("store");

  let store = JSON.parse(JSON_store);

  return store;
}

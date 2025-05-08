import store from "#data/store";

export default function (value) {
  let JSON_store = JSON.stringify(value ? value : store);

  sessionStorage.setItem("store", JSON_store);
}

import getStore from "~scripts/store/getStore";

export default function () {
  let store = getStore();

  if (!store) return window.location.replace("/");

  console.log("store: ", store);
}

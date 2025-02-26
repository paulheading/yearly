import getStore from "~scripts/getters/getStore";

export default function () {
  let store = getStore();

  if (!store) return window.location.assign("/");
}

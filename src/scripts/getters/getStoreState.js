import getStore from "~scripts/getters/getStore";

export default function () {
  let store = getStore();

  if (!store) window.location.assign("/");
}

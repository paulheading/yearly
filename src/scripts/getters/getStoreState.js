import getStore from "~scripts/getters/getStore";

export default async function () {
  let store = getStore();

  if (!store) window.location.assign("/");
}

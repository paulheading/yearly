import getStore from "~scripts/getters/getStore";

export default function () {
  if (!getStore()) return false;
  if (!getStore().access_token) return false;
  return getStore().access_token;
}

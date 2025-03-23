import getStore from "~scripts/getters/getStore";
import getDate from "~scripts/getters/getDate";

export default function () {
  if (!getStore()) return false;
  if (!getStore().access) return false;
  if (!getStore().access.token) return false;

  let { expiry } = getStore().access;
  let { now } = getDate().iso;
  let expired = now > expiry;

  console.log("get expiry: ", expiry);

  if (expired) return false;

  return getStore().access.token;
}

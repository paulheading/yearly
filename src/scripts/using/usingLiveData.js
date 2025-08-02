import getInternetStatus from "#scripts/getters/getInternetStatus";

export default function () {
  let envIsLive = import.meta.env.PUBLIC_DATA_SOURCE != "offline";

  if (!getInternetStatus()) return false;

  if (!envIsLive) return false;

  return true;
}

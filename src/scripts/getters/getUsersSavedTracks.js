import getData from "~scripts/getters/getData";

export default async function (offset = 0) {
  return await getData("me/tracks?offset=" + offset);
}

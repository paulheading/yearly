import getData from "~scripts/getters/getData";

export default async (offset = 0) =>
  await getData("me/tracks?offset=" + offset);

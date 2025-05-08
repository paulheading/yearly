import getData from "#getters/spotify/getData";

export default async function (offset = 0) {
  return await getData("me/tracks?offset=" + offset);
}

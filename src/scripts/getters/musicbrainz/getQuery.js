import getData from "~scripts/getters/musicbrainz/getData";

export default async function (value) {
  let query = "?query=artist:" + value;

  let data = await getData(query);

  let { artists } = data;

  return artists[0];
}

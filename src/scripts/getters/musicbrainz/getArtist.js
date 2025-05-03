import getData from "~scripts/getters/musicbrainz/getData";

export default async function (id) {
  let query = id + "?inc=artist-rels";

  let data = await getData(query);

  return data;
}

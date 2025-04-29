import getData from "~scripts/getters/spotify/getData";

export default async function (tracks) {
  // let recommends = await getData(`recommendations?seed_tracks=${tracks}`);

  let recommends = await getData(`recommendations?${tracks}`);

  return recommends;
}

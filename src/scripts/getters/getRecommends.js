import { getData } from "~scripts/getters";

export default async function (tracks) {
  // let recommends = await getData(`recommendations?seed_tracks=${tracks}`);

  let recommends = await getData(`recommendations?${tracks}`);

  console.log("recommends: ", recommends);

  return recommends;
}

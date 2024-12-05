import { getData } from "~scripts/services";

export default async function (tracks) {
  // let recommends = await getData(`recommendations?seed_tracks=${tracks}`);

  let recommends = await getData(`recommendations?${tracks}`);

  console.log("recommends: ", recommends);

  return recommends;
}

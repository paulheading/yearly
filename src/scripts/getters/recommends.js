import get from "~scripts/getters";

export default async function (tracks) {
  // let recommends = await getData(`recommendations?seed_tracks=${tracks}`);

  let recommends = await get.data(`recommendations?${tracks}`);

  console.log("recommends: ", recommends);

  return recommends;
}

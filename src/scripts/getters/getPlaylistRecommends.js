// import { getRecommends } from "~scripts/getters";

import { displaySection, loadingComplete } from "~scripts/helpers";

export default function (tracks) {
  console.log("find recommends for: ", tracks);

  // let recommends = tracks.forEach(({ track }) => track.id + ",");

  // recommends = recommends.slice(0, -1);

  // getRecommends(recommends);

  // getRecommends(
  //   "seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA"
  // );

  function showElements() {
    displaySection("recommend_tracks", "block");
  }

  loadingComplete(showElements);
}

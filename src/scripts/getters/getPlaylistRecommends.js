// import { getRecommends } from "~scripts/getters";

import loadComplete from "~scripts/loaders/loadComplete";

import { displaySection } from "~scripts/helpers";

export default function (tracks) {
  // let recommends = tracks.forEach(({ track }) => track.id + ",");

  // recommends = recommends.slice(0, -1);

  // getRecommends(recommends);

  // getRecommends(
  //   "seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA"
  // );

  loadComplete(function () {
    displaySection("recommend_tracks", "block");
  });
}

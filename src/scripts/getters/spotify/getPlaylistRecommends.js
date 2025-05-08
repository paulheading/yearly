// import getRecommends from "#getters/getRecommends";
import displaySection from "#display/displaySection";
import loadComplete from "#loaders/loadComplete";
import data from "#selectors/data";

export default function (tracks) {
  // let recommends = tracks.forEach(({ track }) => track.id + ",");

  // recommends = recommends.slice(0, -1);

  // getRecommends(recommends);

  // getRecommends(
  //   "seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA"
  // );

  loadComplete(function () {
    displaySection(data.section.recommend_tracks, "block");
  });
}

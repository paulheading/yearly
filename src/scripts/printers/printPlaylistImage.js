import $ from "~scripts/selectors";
import createRandomNumber from "~scripts/creators/createRandomNumber";
import setStore from "~scripts/setters/setStore";

export default function () {
  let { src } = $.playlist().$image;

  let prev = src.split("playlist");

  let next = createRandomNumber(1, 18);

  prev = prev[1].replace(".jpg", "");

  while (prev == next) next = createRandomNumber(1, 18);

  let path = "/playlist" + next + ".jpg";

  $.playlist().$image.src = path;

  setStore(function (store) {
    store.playlist.image = path;
    return store;
  });
}

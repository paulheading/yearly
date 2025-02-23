import $ from "~scripts/selectors";
import create from "~scripts/helpers/create";
import setStore from "~scripts/store/setStore";

export default function () {
  let source = $.playlist().$image.src;

  let prev = source.split("playlist");

  let next = create.randomNumber(1, 18);

  prev = prev[1].replace(".jpg", "");

  while (prev == next) next = create.randomNumber(1, 18);

  let path = "/playlist" + next + ".jpg";

  $.playlist().$image.src = path;

  setStore(function (store) {
    store.playlist.image = path;
    return store;
  });
}

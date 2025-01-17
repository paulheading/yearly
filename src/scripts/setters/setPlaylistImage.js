import $ from "~scripts/selectors";
import { createRandomNumber } from "~scripts/helpers";

export default function () {
  let source = $.playlist_image().src;

  let prev = source.split("playlist");

  let next = createRandomNumber(1, 18);

  prev = prev[1].replace(".jpg", "");

  while (prev == next) next = createRandomNumber(1, 18);

  let path = "/playlist" + next + ".jpg";

  $.playlist_image().src = path;
}

import $ from "~scripts/selectors";
import { is } from "~scripts/helpers";

import { resetCustomConfig } from "~scripts/setters";

function buildButtonClick() {
  if (!is.playlistStyleCustom()) resetCustomConfig();
  window.location.assign("/save");
}

export default function () {
  $.button.build.addEventListener("click", buildButtonClick);
}

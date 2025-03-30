import $ from "~scripts/selectors";
import resetCustomConfig from "~scripts/setters/resetCustomConfig";
import usingCustomStyle from "~scripts/using/usingCustomStyle";

function buildButtonClick() {
  if (!usingCustomStyle()) resetCustomConfig();
  window.location.assign("/save");
}

export default function () {
  $.button.build.addEventListener("click", buildButtonClick);
}

import $ from "~scripts/selectors";
import { switchElements } from "~scripts/helpers";

function customButtonClick() {
  let playlistActive = $.sections.playlist.style.display != "none";
  let innerText = $.buttons.custom.querySelector("u");

  if (playlistActive) {
    switchElements($.sections.playlist, $.sections.custom);
    innerText.innerText = "Set menu please";
  } else {
    switchElements($.sections.custom, $.sections.playlist);
    innerText.innerText = "Custom job please";
  }
}

export default function () {
  $.buttons.custom.addEventListener("click", customButtonClick);
}

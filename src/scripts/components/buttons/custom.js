import $ from "~scripts/selectors";
import { hideShowElements } from "~scripts/helpers";

function switchDisplay({ currentTarget, text, hide, show }) {
  let $switch = currentTarget.querySelector("u");

  hideShowElements(hide, show);
  $switch.innerText = text;
  show.querySelector("input, button").focus();
}

function customButtonClick(event) {
  let { currentTarget } = event;
  let { playlist, custom } = $.sections;

  let playlistActive = playlist.style.display != "none";

  let toCustom = {
    text: "Set menu please",
    hide: playlist,
    show: custom,
  };

  let toPlaylist = {
    text: "Custom job please",
    hide: custom,
    show: playlist,
  };

  switchDisplay({ currentTarget, ...(playlistActive ? toCustom : toPlaylist) });
}

export default function () {
  $.buttons.custom.addEventListener("click", customButtonClick);
}

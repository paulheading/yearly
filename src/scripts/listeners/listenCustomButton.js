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

  let { playlist, custom } = $.section;

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

  let contents = playlistActive ? toCustom : toPlaylist;

  switchDisplay({ currentTarget, ...contents });
}

export default function () {
  $.button.custom.addEventListener("click", customButtonClick);
}

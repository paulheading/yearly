import $ from "~scripts/selectors";
import { hideShowElements } from "~scripts/helpers";

function switchDisplay({ hide, show, text, focus }) {
  let $switch = $.buttons.custom.querySelector("u");

  console.log("switch display");

  hideShowElements(hide, show);
  $switch.innerText = text;
  show.querySelector(focus).focus();
}

function customButtonClick() {
  let playlistActive = $.sections.playlist.style.display != "none";
  let { playlist, custom } = $.sections;

  let toCustom = {
    hide: playlist,
    show: custom,
    text: "Set menu please",
    focus: "input",
  };

  let toPlaylist = {
    hide: custom,
    show: playlist,
    text: "Custom job please",
    focus: "button",
  };

  switchDisplay(playlistActive ? toCustom : toPlaylist);
}

export default function () {
  $.buttons.custom.addEventListener("click", customButtonClick);
}

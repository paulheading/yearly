import $ from "~scripts/selectors";
import { hideShowElements } from "~scripts/helpers";

function switchDisplay({ currentTarget, text, hide, show }) {
  let $switch = currentTarget.querySelector("u");

  hideShowElements(hide, show);

  $switch.innerText = text;

  show.querySelector("input, button").focus();
}

function switchToCustom(currentTarget) {
  let { playlist, custom } = $.section;

  let contents = {
    text: "Set menu please",
    hide: playlist,
    show: custom,
  };

  switchDisplay({ currentTarget, ...contents });
}

function switchToPlaylist(currentTarget) {
  let { playlist, custom } = $.section;

  let contents = {
    text: "Custom job please",
    hide: custom,
    show: playlist,
  };

  switchDisplay({ currentTarget, ...contents });
}

function customButtonClick(event) {
  let { currentTarget } = event;

  let { playlist } = $.section;

  let playlistActive = playlist.style.display != "none";

  playlistActive
    ? switchToCustom(currentTarget)
    : switchToPlaylist(currentTarget);
}

export default function () {
  $.button.custom.addEventListener("click", customButtonClick);
}

export { switchToCustom, switchToPlaylist };

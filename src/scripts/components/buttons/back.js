import $ from "~scripts/selectors";
import {
  displaySection,
  loadingComplete,
  loadingCurrently,
} from "~scripts/helpers";

function hideElements() {
  let sections = [
    "save_playlist",
    "share_playlist",
    "empty_playlist",
    "tracks_added",
    "recommend_tracks",
  ];

  sections.forEach((name) => displaySection(name, "none"));
}

function showElements() {
  displaySection("choose_card", "block");
}

function backButtonClick() {
  loadingCurrently(hideElements);
  loadingComplete(showElements);
}

export default function () {
  $.buttons.back.forEach((button) =>
    button.addEventListener("click", backButtonClick)
  );
}

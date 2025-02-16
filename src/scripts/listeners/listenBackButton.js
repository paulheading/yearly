import $ from "~scripts/selectors";
import { displaySection, loading } from "~scripts/helpers";
import { resetTracksAdded } from "~scripts/setters";

let sections = [
  "save_playlist",
  "share_playlist",
  "empty_playlist",
  "tracks_added",
  "recommend_tracks",
];

function backButtonClick() {
  resetTracksAdded();

  loading.currently(function () {
    sections.forEach((name) => displaySection(name, "none"));
  });

  loading.complete(function () {
    displaySection("choose_card", "block");
  });
}

export default function () {
  $.button.backs.forEach((button) =>
    button.addEventListener("click", backButtonClick)
  );
}

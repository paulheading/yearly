import $ from "~scripts/selectors";
import loadInProgress from "~scripts/loaders/loadInProgress";
import resetTracksAdded from "~scripts/setters/resetTracksAdded";
import displaySection from "~scripts/display/displaySection";

let sections = [
  "save_playlist",
  "share_playlist",
  "empty_playlist",
  "tracks_added",
  "recommend_tracks",
];

function backButtonClick() {
  resetTracksAdded();

  loadInProgress(function () {
    sections.forEach((name) => displaySection(name, "none"));
  });

  window.location.assign("/build");
}

export default function () {
  $.button.backs.forEach((button) =>
    button.addEventListener("click", backButtonClick)
  );
}

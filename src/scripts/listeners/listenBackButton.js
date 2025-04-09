import $ from "~scripts/selectors";
import loadInProgress from "~scripts/loaders/loadInProgress";
import resetTracksAdded from "~scripts/setters/resetTracksAdded";
import displaySection from "~scripts/display/displaySection";
import { section } from "~scripts/selectors/data";

let sections = [
  section.save_playlist,
  section.share_playlist,
  section.empty_playlist,
  section.tracks_added,
  section.recommend_tracks,
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

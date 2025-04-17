import $ from "~scripts/selectors";
import loadInProgress from "~scripts/loaders/loadInProgress";
import resetTracksAdded from "~scripts/setters/resetTracksAdded";
import displaySection from "~scripts/display/displaySection";
import data from "~scripts/selectors/data";

let sections = [
  data.section.save_playlist,
  data.section.share_playlist,
  data.section.empty_playlist,
  data.section.tracks_added,
  data.section.recommend_tracks,
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

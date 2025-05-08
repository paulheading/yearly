import $ from "#selectors";
import loadInProgress from "#loaders/loadInProgress";
import resetTracksAdded from "#setters/resetTracksAdded";
import displaySection from "#display/displaySection";
import data from "#selectors/data";

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

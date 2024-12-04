import $ from "~scripts/selectors";
import { loadingComplete, loadingCurrently } from "~scripts/helpers";

function hideElements() {
  let sections = [
    $.sections.save_playlist,
    $.sections.share_playlist,
    $.sections.empty_playlist,
  ];

  sections.forEach((section) => (section.style.display = "none"));
}

function showElements() {
  $.sections.choose_card.style.display = "initial";
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

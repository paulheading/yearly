import $ from "~scripts/selectors";
import { loadingComplete, loadingCurrently } from "~scripts/helpers";

function hideElements() {
  $.sections.save_playlist.style.display = "none";
  $.sections.share_playlist.style.display = "none";
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

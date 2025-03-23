import $ from "~scripts/selectors";
import getYearAdded from "~scripts/getters/getYearAdded";

export default function () {
  if (!getYearAdded()) {
    $.print.since.style.display = "none";
    return;
  }

  $.print.year_added.innerText = getYearAdded();
}

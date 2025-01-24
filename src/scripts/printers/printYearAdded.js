import $ from "~scripts/selectors";
import getYearAdded from "~scripts/getters/getYearAdded";

export default function () {
  $.print.year_added.innerText = getYearAdded();
}

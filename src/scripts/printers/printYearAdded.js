import $ from "#selectors";
import getYearAdded from "#getters/getYearAdded";

export default function () {
  $.print.year_added.innerText = getYearAdded();
}

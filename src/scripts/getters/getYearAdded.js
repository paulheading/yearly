import $ from "~scripts/selectors";
import { is } from "~scripts/helpers";

export default function () {
  if (is.playlistStyleCustom) {
    let { data } = $.formSelectors($.select_year_added());
    return data.id;
  }

  let { year } = getDate();

  return year;
}

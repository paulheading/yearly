import $ from "~scripts/selectors";
import { is } from "~scripts/helpers";

export default function () {
  return;

  if (is.playlistStyleCustom) {
    let { data } = $.selectList.selectors($.select_year_added());
    return data.id;
  }

  let { year } = getDate();

  return year;
}

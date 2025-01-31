import $ from "~scripts/selectors";
import { getDate } from "~scripts/getters";
import { is } from "~scripts/helpers";

export default function () {
  let { year } = getDate();

  if (is.playlistStyleCustom) {
    let { data } = $.selectList.selectors($.selectList.year_added);

    let hasValue = data.id != 0;

    return hasValue ? data.id : year;
  }

  return year;
}

import $ from "~scripts/selectors";

export default function () {
  let { data } = $.selectList.selectors($.selectList.year_released);

  return data.id;
}

import $ from "~scripts/selectors";

export default function () {
  return;
  let { data } = $.selectList.selectors($.select_year_released());
  return data.id;
}

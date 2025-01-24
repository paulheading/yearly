import $ from "~scripts/selectors";

export default function () {
  let { data } = $.formSelectors($.select_year_released());
  return data.id;
}

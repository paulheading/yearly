import $ from "~scripts/selectors";

export default function () {
  let { data } = $.formSelectors($.select_source());
  return data.id;
}

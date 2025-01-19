import $ from "~scripts/selectors";
import store from "~data/store";

export default function (value) {
  if (value) return (store.selected.year = value);

  let { data } = $.formSelectors($.select_year());

  store.selected.year = data;
}

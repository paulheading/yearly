import $ from "~scripts/selectors";
import store from "~data/store";

export default function () {
  let { data } = $.formSelectors($.select_source());
  store.selected.source = data;
}

import $ from "~scripts/selectors";
import store from "~data/store";

export default function() {
    let { data } = $.formSelectors($.select_year());
    store.selected.year = data;
}
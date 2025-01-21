import $ from "~scripts/selectors";
import getStore from "~scripts/getters/getStore";

export default function (value) {
  $.print.year_added.innerText = value ? value : getStore().selected.year.added;
}

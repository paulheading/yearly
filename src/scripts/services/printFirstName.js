import $ from "~scripts/selectors";
import store from "~data/store";

export default function () {
  $.print.first_name.innerText = store.user.first_name;
}

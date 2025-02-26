import $ from "~scripts/selectors";
import getStore from "~scripts/getters/getStore";

export default function () {
  $.print.first_name.innerText = getStore().user.first_name;
}

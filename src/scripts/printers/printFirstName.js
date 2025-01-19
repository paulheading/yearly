import $ from "~scripts/selectors";
import { getStore } from "~scripts/getters";

export default function () {
  $.print.first_name.innerText = getStore().user.first_name;
}

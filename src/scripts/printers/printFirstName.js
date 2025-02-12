import $ from "~scripts/selectors";
import getStore from "~scripts/store/getStore";

export default function () {
  $.print.first_name.innerText = getStore().user.first_name;
}

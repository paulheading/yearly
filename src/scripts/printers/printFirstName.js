import $ from "#selectors";
import getStore from "#getters/getStore";

export default function () {
  $.print.first_name.innerText = getStore().user.first_name;
}

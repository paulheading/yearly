import $ from "~scripts/selectors";
import hideShowElements from "~scripts/helpers/hideShowElements";

export default function (callback) {
  callback();
  hideShowElements($.loaded, $.not_loaded);
}

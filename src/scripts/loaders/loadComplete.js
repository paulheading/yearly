import $ from "~scripts/selectors";
import hideShowElements from "~scripts/helpers/hideShowElements";

export default function (callback) {
  setTimeout(function () {
    hideShowElements($.not_loaded, $.loaded);
    callback();
  }, 1000);
}

import $ from "#selectors";
import hideShowElements from "#helpers/hideShowElements";

export default function (callback) {
  setTimeout(function () {
    hideShowElements($.not_loaded, $.loaded);
    callback();
  }, 1000);
}

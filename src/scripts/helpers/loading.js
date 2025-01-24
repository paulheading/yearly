import $ from "~scripts/selectors";
import { displaySection, hideShowElements } from "~scripts/helpers";

function currently(callback) {
  callback();
  hideShowElements($.loaded, $.not_loaded);
}

function complete(callback) {
  setTimeout(function () {
    displaySection("tracks_added", "none");
    hideShowElements($.not_loaded, $.loaded);
    callback();
  }, 1000);
}

export default {
  currently,
  complete,
};

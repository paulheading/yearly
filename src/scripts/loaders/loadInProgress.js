import $ from "#selectors";
import hideShowElements from "#helpers/hideShowElements";

export default function (callback) {
  callback();
  hideShowElements($.loaded, $.not_loaded);
}

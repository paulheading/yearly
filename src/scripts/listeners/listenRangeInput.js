import $ from "~scripts/selectors";
import { printRangeInputValue } from "~scripts/printers";

function handleRangeInput(params, callback) {
  printRangeInputValue(params);

  let { $output } = params;

  let card = $output.closest(".card-container")?.getAttribute("data-id");

  let value = $output.innerText;

  let title = $output.getAttribute("data-range");

  if (callback) callback({ card, value, name });
}

export default function (callback) {
  $.setting.ranges.forEach(function ($range) {
    let params = $.setting.selectors($range);

    $range.oninput = () => handleRangeInput(params, callback);
  });
}

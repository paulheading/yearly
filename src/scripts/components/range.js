import $ from "~scripts/selectors";
import { printSliderInputValue } from "~scripts/printers";

function handleSliderInput(params, callback) {
  printSliderInputValue(params);
  callback(params);
}

export default function (callback) {
  $.sliders.forEach(function ($slider) {
    let $setting = $slider.closest(".setting");
    let params = $.settingSelectors($setting);

    $slider.oninput = () => handleSliderInput(params, callback);
  });
}

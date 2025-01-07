import $ from "~scripts/selectors";
import { printSliderInputValue } from "~scripts/printers";

export default function () {
  $.sliders.forEach(function ($slider) {
    let $setting = $slider.closest(".setting");
    let params = $.settingSelectors($setting);
    $slider.oninput = () => printSliderInputValue(params);
  });
}

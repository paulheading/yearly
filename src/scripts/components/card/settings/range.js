import $ from "~scripts/selectors";
import { printSliderInputValue } from "~scripts/services";

export default function () {
  let $sliders = document.querySelectorAll(".slider");

  $sliders.forEach(function ($slider) {
    let $setting = $slider.closest(".setting");
    let params = $.settingSelectors($setting);
    $slider.oninput = () => printSliderInputValue(params);
  });
}

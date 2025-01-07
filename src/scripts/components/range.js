import $ from "~scripts/selectors";
import print from "~scripts/print";

export default function () {
  $.sliders.forEach(function ($slider) {
    let $setting = $slider.closest(".setting");
    let params = $.settingSelectors($setting);
    $slider.oninput = () => print.sliderInputValue(params);
  });
}

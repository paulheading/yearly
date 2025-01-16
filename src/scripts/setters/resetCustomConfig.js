import $ from "~scripts/selectors";
import { printSliderInputValue } from "~scripts/printers";
import {
  currentOptionIndex,
  selectCurrentOption,
} from "~scripts/components/select";

export default function () {
  let { selectors } = $.cardSelectors($.cards.custom);
  let { $settings } = selectors;
  let { $items } = $settings;

  $items.$toggles.forEach(function ($toggle) {
    let { $input } = $.settingSelectors($toggle);

    $input.checked = false;
  });

  $items.$ranges.forEach(function ($range) {
    let { $input, $output, $mins } = $.settingSelectors($range);

    $input.value = 0;

    printSliderInputValue({ $input, $output, $mins });
  });

  $items.$selects.forEach(function ($select) {
    let $form = $select.querySelector("form");

    $.select_forms().forEach(($item, index) => {
      if ($item == $form) {
        let parent = { $form, index };

        currentOptionIndex[parent.index] = 0;

        selectCurrentOption(parent);
      }
    });
  });
}

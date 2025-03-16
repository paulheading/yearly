import $ from "~scripts/selectors";
import { printRangeInputValue } from "~scripts/printers";
import {
  currentOptionIndex,
  selectCurrentOption,
} from "~scripts/listeners/listenSelectForm";

export default function () {
  let { $settings } = $.card.selectors($.card.custom);
  let { $items } = $settings;

  $items.$toggles.forEach(($input) => ($input.checked = false));

  $items.$ranges.forEach(function ($input) {
    $input.value = 0;

    printRangeInputValue($input);
  });

  // @TODO: sort this out

  $items.$selects.forEach(function ($select) {
    let $form = $select.querySelector("form");

    $.query.selectFormAll().forEach(($item, index) => {
      if ($item == $form) {
        let parent = { $form, index };

        currentOptionIndex[parent.index] = 0;

        selectCurrentOption(parent);
      }
    });
  });
}

import { handleSelectForm } from "paully/handlers";
import $ from "~scripts/selectors";
import settings from "~data/settings";
import printRangeInputValue from "~scripts/printers/printRangeInputValue";

let { setFormButton, toggleActiveItem, focusOnItem } = handleSelectForm;

export default function () {
  let { $settings } = $.card.selectors($.card.custom);
  let { $items } = $settings;

  $items.toggle.forEach(function ($toggle) {
    let $input = $toggle.querySelector("input");

    $input.checked = false;
  });

  $items.range.forEach(function ($range) {
    let $input = $range.querySelector("input");

    $input.value = 0;

    printRangeInputValue($input);
  });

  $items.select.forEach(function ($select) {
    let $form = $select.querySelector("form");

    let { $button, $items, data } = $.selectForm.selectors($form);

    let innerText = settings[data.snake];

    let value = 0;

    setFormButton({ $button, innerText, value });

    $items.forEach(function ($item, index) {
      let active = index == 0;

      toggleActiveItem({ $item, active });

      if (active) focusOnItem($item);
    });
  });
}

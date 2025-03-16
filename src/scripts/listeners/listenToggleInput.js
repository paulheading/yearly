import $ from "~scripts/selectors";
import setCardSetting from "~scripts/setters/setCardSetting";
import { getInputAttributes } from "./listenRangeInput";

function resetToggleInput($input, data) {
  let { card, setting } = data;
  let value = false;

  $input.checked = value;

  setCardSetting({
    card,
    setting,
    value,
  });
}

export default function () {
  $.setting.toggles.forEach(function ($input) {
    $input.addEventListener("change", function () {
      let input = getInputAttributes($input);

      let { card, setting, value, group_name, group_action } = input;

      setCardSetting({ card, setting, value });

      if (!group_name) return;

      $.setting.toggles.forEach(function ($other) {
        if ($other == $input) return;

        let other = getInputAttributes($other);

        if (!other.group_name) return;

        if (other.group_name != input.group_name) return;

        if (!other.value) return;

        if (group_action == "cancel") resetToggleInput($other, other);
      });
    });
  });
}

import $ from "#selectors";
import attrs from "#selectors/attrs";
import settings from "#data/settings";
import setCardSetting from "#setters/setCardSetting";
import printRangeInputValue from "#printers/printRangeInputValue";

function getInputAttributes($input) {
  let card = $input.getAttribute(attrs.data.card);
  let snake = $input.getAttribute(attrs.data.snake);
  let group_name = $input.getAttribute(attrs.data["group-name"]);
  let group_action = $input.getAttribute(attrs.data["group-action"]);
  let range_pos = $input.getAttribute(attrs.data["range-pos"]);

  let setting = settings[snake];
  let value;

  if ($input.type == "checkbox") value = $input.checked;
  if ($input.type == "range") value = $input.value;

  return { card, snake, group_name, group_action, range_pos, setting, value };
}

function resetRangeInput($element, data) {
  let { card, setting } = data;
  let value = 0;

  $element.value = value;

  printRangeInputValue($element);

  setCardSetting({
    card,
    setting,
    value,
  });
}

function handleRangeInput($input) {
  let input = getInputAttributes($input);

  let { card, setting, value, group_name, group_action, range_pos } = input;

  printRangeInputValue($input);

  setCardSetting({ card, setting, value });

  if (!group_name) return;

  $.setting.ranges.forEach(function ($other) {
    if ($other == $input) return;

    let other = getInputAttributes($other);

    if (!other.group_name) return;

    if (other.group_name != input.group_name) return;

    if (!other.value) return;

    if (group_action == "ceiling") {
      let $input_value = Number($input.value);
      let $other_value = Number($other.value);

      if ($input_value == 0 || $other_value == 0) return;

      if (range_pos == "min" && $input_value > $other_value) {
        resetRangeInput($other, other);
      }

      if (range_pos == "max" && $input_value < $other_value) {
        resetRangeInput($other, other);
      }
    }
  });
}

export default function () {
  $.setting.ranges.forEach(function ($input) {
    $input.addEventListener("input", function () {
      return handleRangeInput($input);
    });
  });
}

export { getInputAttributes };

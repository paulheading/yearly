import $ from "~scripts/selectors";
import { forEachCustomSetting } from "~scripts/helpers";
import { printSliderInputValue } from "~scripts/printers";

function updateDOMSettings(setting, $input) {
  let $card = $input.closest(".card-container");
  let { selectors } = $.cardSelectors($card);
  let { $settings } = selectors;

  $settings.$items.$all.forEach(function ($setting) {
    let { $title, $input, $output, $mins } = $.settingSelectors($setting);

    if (!$title) return;

    if ($title.innerText == setting.title) {
      if (setting.type == "toggle") {
        $input.checked = setting.value;
        return;
      }

      if (setting.type == "range") {
        $input.value = setting.value;
        printSliderInputValue({ $input, $output, $mins });
        return;
      }
    }
  });
}

function updateMinRange(setting, active) {
  let setting_active = setting.value > 0;

  if (!setting_active) return;

  let maxSmallerThanMin = active.value < setting.value;

  if (!maxSmallerThanMin) return;

  setting.value = 0;
}

function updateMaxRange(setting, active) {
  let setting_active = setting.value > 0;

  if (!setting_active) return;

  let minLargerThanMax = active.value > setting.value;

  if (!minLargerThanMax) return;

  setting.value = 0;
}

function matchGroupNameSetValue(active, $input) {
  forEachCustomSetting(function (setting) {
    if (!setting.group) return;
    if (setting.title == active.title) return;

    let { group } = setting;

    if (group.name == active.group.name) {
      if (group.action == "cancel") setting.value = false;
      if (group.action == "toggle") setting.value = !active.value;

      if (group.action == "ceiling") {
        if (setting.range.pos == "min") updateMinRange(setting, active);
        if (setting.range.pos == "max") updateMaxRange(setting, active);
      }

      updateDOMSettings(setting, $input);
    }
  });
}

function matchTitleSetValue(setting, $input) {
  if (typeof setting.value == "boolean") setting.value = $input.checked;
  if (typeof setting.value == "number") setting.value = Number($input.value);

  if (setting.group) matchGroupNameSetValue(setting, $input);
}

function updateStoreSettings($input, $title) {
  forEachCustomSetting(function (setting) {
    if (setting.title == $title.innerText) matchTitleSetValue(setting, $input);
  });
}

function addSettingsEventListeners($setting) {
  let { $title, $input } = $.settingSelectors($setting);

  if (!$input) return;

  $input.addEventListener("click", () => updateStoreSettings($input, $title));
}

function addButtonClickFunction(selectors) {
  let { $dot_buttons, $lists, $button, index } = selectors;

  $dot_buttons.forEach(function ($item) {
    let buttonIsActive = $item == $button;
    $item.disabled = buttonIsActive;
  });

  $lists.forEach(function (setting, number) {
    let isActive = number == index;

    setting.style.display = isActive ? "block" : "none";

    if (isActive) setting.querySelector("button, input").focus();
  });
}

function addButtonEventListeners(selectors) {
  let { $button } = selectors;
  $button.addEventListener("click", () => addButtonClickFunction(selectors));
}

$.cards.all.forEach(function ($card) {
  let { selectors } = $.cardSelectors($card);
  let { $settings, $dot_buttons } = selectors;

  $settings.$items.$all.forEach(addSettingsEventListeners);

  $dot_buttons.forEach(function ($button, index) {
    addButtonEventListeners({
      $lists: $settings.$lists,
      $dot_buttons,
      $button,
      index,
    });
  });
});

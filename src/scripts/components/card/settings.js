import $ from "~scripts/selectors";
import { forEachCustomSetting } from "~scripts/helpers";

function updateDOMSettings(setting, $input) {
  let $card = $input.closest(".card-container");
  let { selectors } = $.cardSelectors($card);
  let { $settings_items } = selectors;

  $settings_items.forEach(function ($setting) {
    let { title, $input } = $.settingSelectors($setting);

    if (title == setting.title) $input.checked = setting.value;
  });
}

function matchGroupNameSetValue(active, $input) {
  forEachCustomSetting(function (setting) {
    if (!setting.group) return;
    if (setting.title == active.title) return;

    let { group } = setting;

    if (group.name == active.group.name) {
      if (group.action == "cancel") setting.value = false;
      if (group.action == "toggle") setting.value = !active.value;

      updateDOMSettings(setting, $input);
    }
  });
}

function matchTitleSetValue(setting, $input) {
  setting.value = $input.checked;

  if (setting.group) matchGroupNameSetValue(setting, $input);
}

function updateStoreSettings($input, title) {
  forEachCustomSetting(function (setting) {
    if (setting.title == title) matchTitleSetValue(setting, $input);
  });
}

function addSettingsEventListeners($setting) {
  let { title, $input } = $.settingSelectors($setting);

  if (!$input) return;

  $input.addEventListener("click", () => updateStoreSettings($input, title));
}

function addButtonClickFunction(selectors) {
  let { $dot_buttons, $settings_lists, $button, index } = selectors;

  $dot_buttons.forEach(($button) => $button.removeAttribute("data"));

  $button.setAttribute("data", "active");

  $settings_lists.forEach(function (setting, number) {
    setting.style.display = number == index ? "block" : "none";
  });
}

function addButtonEventListeners(selectors) {
  let { $button } = selectors;
  $button.addEventListener("click", () => addButtonClickFunction(selectors));
}

$.cards.forEach(function ($card) {
  let { selectors } = $.cardSelectors($card);
  let { $settings_items, $settings_lists, $dot_buttons } = selectors;

  $settings_items.forEach(addSettingsEventListeners);
  $dot_buttons.forEach(function ($button, index) {
    addButtonEventListeners({
      $dot_buttons,
      $settings_lists,
      $button,
      index,
    });
  });
});

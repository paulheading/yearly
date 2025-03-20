import $ from "~scripts/selectors";
import { printRangeInputValue } from "~scripts/printers";
import { getPlaylistConfig } from "~scripts/getters";
import settings from "~data/settings";
import {
  setFormButton,
  toggleActiveItem,
} from "~scripts/listeners/listenSelectForm";

function matchConfigTitle({ $item, title }) {
  let $title = $item.querySelector(".title");

  return $title.innerText == title;
}

function setToggle($item, config) {
  let { title } = config;

  if (!matchConfigTitle({ $item, title })) return;

  let $input = $item.querySelector("input");

  $input.checked = config.value;
}

function setRange($item, config) {
  let { title } = config;

  if (!matchConfigTitle({ $item, title })) return;

  let $input = $item.querySelector("input");

  $input.value = config.value;

  printRangeInputValue($input);
}

function setSelect($item, config) {
  let { title } = config;

  let $form = $item.querySelector("form");

  let { data, $button, $items } = $.selectForm.selectors($form);

  let setting = settings[data.snake];

  if (setting != title) return;

  $items.forEach(function ($item) {
    let value = $item.getAttribute("data_id");
    let active = value == config.value;

    toggleActiveItem({ $item, active });

    if (!active) return;

    let { innerText } = $item;

    setFormButton({ $button, innerText, value });
  });
}

export default function () {
  console.log(getPlaylistConfig());

  let { $settings } = $.card.selectors($.card.custom);

  let { $items } = $settings;

  getPlaylistConfig().forEach(function (config) {
    if (!config.value) return;

    let { type } = config;

    $items[type].forEach(function ($item) {
      if (type == "toggle") setToggle($item, config);
      if (type == "range") setRange($item, config);
      if (type == "select") setSelect($item, config);
    });
  });
}

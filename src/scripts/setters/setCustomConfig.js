import $ from "~scripts/selectors";
import printRangeInputValue from "~scripts/printers/printRangeInputValue";
import getPlaylistConfig from "~scripts/getters/getPlaylistConfig";
import settings from "~data/settings";
import setItemsByValue from "~scripts/setters/setItemsByValue";

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

  let { data } = $.selectForm.selectors($form);

  let setting = settings[data.snake];

  if (setting != title) return;

  setItemsByValue({ $form, value: config.value });
}

export default function () {
  let { settings } = $.card.selectors($.card.custom);

  let { items } = settings;

  getPlaylistConfig().forEach(function (config) {
    if (!config.value) return;

    let { data } = config;

    let type = data["data-type"];

    items["$" + type].forEach(function ($item) {
      let params = [$item, config];

      if (type == "toggle") setToggle(...params);
      if (type == "range") setRange(...params);
      if (type == "select") setSelect(...params);
    });
  });
}

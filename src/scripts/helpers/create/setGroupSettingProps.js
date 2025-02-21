import store from "~data/store";

function loopColors(value) {
  let { color } = store;
  return value + 1 == color.array.length;
}

function settingProps(setting, index) {
  loopColors(store.color.index) ? (store.color.index = 0) : store.color.index++;

  setting.evenOrOdd = index % 2 ? "even" : "odd";

  let containerProps = {
    "class:list": [
      "setting",
      setting.evenOrOdd,
      setting.editable && "editable",
    ],
    "data-group": setting.group?.name,
    "data-snake": setting.snake,
    "data-type": setting.type,
  };

  let { color } = store;

  return {
    color: color.array[color.index],
    containerProps,
    setting,
  };
}

export default function (setting, index) {
  let is = {
    toggle: setting.type == "toggle",
    range: setting.type == "range",
    select: setting.type == "select",
  };

  let props = settingProps(setting, index);

  return {
    is,
    props,
  };
}

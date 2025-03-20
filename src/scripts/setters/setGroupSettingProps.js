import store from "~data/store";

function loopColors(value) {
  let { color } = store;
  return value + 1 == color.array.length;
}

function createDataObject(setting) {
  let { group, snake, card, type, range } = setting;

  let state = type == "select" ? "closed" : "open";

  return {
    range_pos: range ? range.pos : null,
    group_name: group ? group.name : null,
    group_action: group ? group.action : null,
    setting: true,
    snake,
    state,
    card,
    type,
  };
}

function settingProps({ setting, index }) {
  loopColors(store.color.index) ? (store.color.index = 0) : store.color.index++;

  let containerProps = {
    "class:list": [
      "setting",
      setting.type,
      index % 2 ? "even" : "odd",
      setting.editable && "editable",
    ],
  };

  let { color } = store;

  return {
    color: color.array[color.index],
    data: createDataObject(setting),
    containerProps,
    setting,
  };
}

export default function ({ setting, index }) {
  let { type } = setting;

  let is = {
    toggle: type == "toggle",
    range: type == "range",
    select: type == "select",
  };

  let props = settingProps({ setting, index });

  return {
    is,
    props,
  };
}

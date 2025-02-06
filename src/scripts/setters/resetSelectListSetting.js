import $ from "~scripts/selectors";
import settings from "~data/settings";
import setStore from "~scripts/setters/setStore";

export default function ({ card, item }) {
  let { value, snake } = item;

  let $list = $.selectList[snake];

  let { $button, $items } = $.selectList.selectors($list);

  value = 0;

  $button.setAttribute("data-id", value);

  let setting = settings[snake];

  $button.innerText = setting;

  $items.forEach(function ($item, index) {
    return index == 0
      ? $item.classList.add("active")
      : $item.classList.remove("active");
  });

  setStore.cardSetting({ card, setting, value });
}

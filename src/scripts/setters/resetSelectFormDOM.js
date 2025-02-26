import $ from "~scripts/selectors";
import settings from "~data/settings";

export default function resetSelectFormDOM(snake) {
  let $list = $.selectForm[snake];

  let { $button, $items } = $.selectForm.selectors($list);

  $button.setAttribute("data-id", 0);

  $button.innerText = settings[snake];

  $items.forEach(function ($item, index) {
    return index == 0
      ? $item.classList.add("active")
      : $item.classList.remove("active");
  });
}

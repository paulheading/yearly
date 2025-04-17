import $ from "~scripts/selectors";
import attrs from "~scripts/selectors/attrs";

function disableActiveButton(params) {
  let { $button } = params;

  $.button.dots.forEach(function ($item) {
    let buttonIsActive = $item == $button;

    $item.disabled = buttonIsActive;
  });
}

function displayActiveList(params) {
  let { $button, index } = params;

  let label = $button.getAttribute(attrs.data.card);

  let $lists = $.card[label].querySelectorAll("ul.settings");

  $lists.forEach(function ($list, number) {
    let isActive = number == index;

    $list.style.display = isActive ? "block" : "none";

    if (isActive) $list.querySelector("button, input").focus();
  });
}

export default function () {
  $.button.dots.forEach(function ($button, index) {
    $button.addEventListener("click", function () {
      let params = { $button, index };

      disableActiveButton(params);
      displayActiveList(params);
    });
  });
}

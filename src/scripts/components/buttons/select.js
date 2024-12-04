import $ from "~scripts/selectors";
import store from "~data/store";

let className = "selected-state";

function createSelectedTargets($card) {
  let $info_buttons = $card.querySelectorAll(".info-button");
  let $profile_pics = $card.querySelectorAll(".profile");
  let $select_button = $card.querySelector(".select-button");

  let id = $card.dataset.id;

  let targets = [
    $card,
    ...$profile_pics,
    ...$info_buttons,
    $select_button,
    $.buttons.build,
  ];

  return { targets, className, $select_button, id };
}

function removeSelectedState($card) {
  let { targets, className, $select_button } = createSelectedTargets($card);

  let isSelected = $card.classList.contains(className);

  if (!isSelected) return;

  targets.forEach((item) => item.classList.remove(className));
  $select_button.innerText = "Select";
  store.selected.id = "";
}

function addSelectedState($card) {
  let { targets, className, $select_button, id } = createSelectedTargets($card);

  let isSelected = $card.classList.contains(className);

  if (isSelected) return;

  targets.forEach((item) => item.classList.add(className));
  $select_button.innerText = "Selected";
  store.selected.id = id;
}

function selectButtonClick(event) {
  let { currentTarget } = event;

  let $card = currentTarget.parentElement;
  let $section = $card.parentElement;
  let $cards = $section.querySelectorAll(".card-container");

  let isSelected = $card.classList.contains(className);

  $cards.forEach(($card) => removeSelectedState($card));

  !isSelected ? addSelectedState($card) : removeSelectedState($card);
}

export default function () {
  $.buttons.select.forEach((button) =>
    button.addEventListener("click", selectButtonClick)
  );
}

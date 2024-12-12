import $ from "~scripts/selectors";
import store from "~data/store";

let className = "selected-state";

function createSelectedTargets($card) {
  let $info_buttons = $card.querySelectorAll(".info-button");
  let $profile_pics = $card.querySelectorAll(".profile");
  let $config_pic = $card.querySelector(".profile.config");
  let $select_button = $card.querySelector(".select-button");
  let $check_svgs = $card.querySelectorAll(".check");
  let $dot_buttons = $card.querySelectorAll("button.dot-button");

  let id = $card.dataset.id;

  let targets = [
    $card,
    ...$profile_pics,
    ...$info_buttons,
    ...$check_svgs,
    ...$dot_buttons,
    $select_button,
    $.buttons.build,
  ];

  return { targets, className, $config_pic, $select_button, id };
}

function removeSelectedState($card) {
  let { targets, className, $config_pic, $select_button } =
    createSelectedTargets($card);

  let isSelected = $card.classList.contains(className);

  if (!isSelected) return;

  targets.forEach((item) => item.classList.remove(className));
  $config_pic.src = $config_pic.src.replace("config--active", "config");
  $select_button.innerText = "Select";
  store.style = "";
}

function addSelectedState($card) {
  let { targets, className, $config_pic, $select_button, id } =
    createSelectedTargets($card);

  let isSelected = $card.classList.contains(className);

  if (isSelected) return;

  targets.forEach((item) => item.classList.add(className));
  $config_pic.src = $config_pic.src.replace("config", "config--active");
  $select_button.innerText = "Selected";
  store.style = id;
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

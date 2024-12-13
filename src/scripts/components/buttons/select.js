import $ from "~scripts/selectors";
import store from "~data/store";

function removeSelectedState($card) {
  let { isSelected, targets, selectors } = $.cardSelectors($card);
  let { $config_pic, $select_button } = selectors;

  if (!isSelected) return;

  targets.forEach((item) => item.classList.remove($.selected_state));
  $config_pic.src = $config_pic.src.replace("config--active", "config");
  $select_button.innerText = "Select";
  store.style = "";
}

function addSelectedState($card) {
  let { id, isSelected, targets, selectors } = $.cardSelectors($card);
  let { $config_pic, $select_button } = selectors;

  if (isSelected) return;

  targets.forEach((item) => item.classList.add($.selected_state));
  $config_pic.src = $config_pic.src.replace("config", "config--active");
  $select_button.innerText = "Selected";
  store.style = id;
}

function selectButtonClick(event) {
  let { currentTarget } = event;

  let $card = currentTarget.parentElement;
  let { isSelected } = $.cardSelectors($card);

  $.cards.forEach(($card) => removeSelectedState($card));

  !isSelected ? addSelectedState($card) : removeSelectedState($card);
}

export default function () {
  $.buttons.select.forEach((button) =>
    button.addEventListener("click", selectButtonClick)
  );
}

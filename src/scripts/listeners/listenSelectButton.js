import $ from "~scripts/selectors";
import { resetCustomConfig } from "~scripts/setters";
import { is } from "~scripts/helpers";
import { getStore } from "~scripts/getters";

function removeSelectedState($card) {
  let { isSelected, targets, selectors } = $.card.selectors($card);
  let { $config_pic, $select_button } = selectors;

  if (!isSelected) return;

  targets.forEach((item) => item.classList.remove($.state.selected));
  $config_pic.src = $config_pic.src.replace("config--active", "config");
  $select_button.innerText = "Select";
  getStore().create.playlist.style = "";
}

function addSelectedState($card) {
  let { id, isSelected, targets, selectors } = $.card.selectors($card);
  let { $config_pic, $select_button } = selectors;

  if (isSelected) return;

  targets.forEach((item) => item.classList.add($.state.selected));
  $config_pic.src = $config_pic.src.replace("config", "config--active");
  $select_button.innerText = "Selected";
  getStore().create.playlist.style = id;
}

function selectButtonClick(event) {
  let { currentTarget } = event;

  let $card = currentTarget.parentElement;

  let { isSelected } = $.card.selectors($card);

  $.query.cardAll().forEach(($card) => removeSelectedState($card));

  !isSelected ? addSelectedState($card) : removeSelectedState($card);

  if (!is.playlistStyleCustom()) resetCustomConfig();
}

export default function () {
  $.button.selects.forEach((button) =>
    button.addEventListener("click", selectButtonClick)
  );
}

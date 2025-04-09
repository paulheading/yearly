import $, { attr } from "~scripts/selectors";
import resetCustomConfig from "~scripts/setters/resetCustomConfig";
import setStore from "~scripts/setters/setStore";
import usingCustomStyle from "~scripts/using/usingCustomStyle";

function removeSelectedState($card) {
  let { state, targets, $config_pic, $select_button } = $.card.selectors($card);

  if (!state.selected) return;

  targets.forEach((item) => item.classList.remove($.state.selected));
  $config_pic.src = $config_pic.src.replace("config--active", "config");
  $select_button.innerText = "Select";

  setStore(function (store) {
    store.playlist.style = state.id;
    return store;
  });
}

function addSelectedState($card) {
  let { state, targets, $config_pic, $select_button } = $.card.selectors($card);

  if (state.selected) return;

  targets.forEach((item) => item.classList.add($.state.selected));
  $config_pic.src = $config_pic.src.replace("config", "config--active");
  $select_button.innerText = "Selected";

  setStore(function (store) {
    store.playlist.style = state.id;
    return store;
  });
}

function toggleSelectedCard({ state, $card }) {
  $.query.cardAll().forEach(($card) => removeSelectedState($card));

  !state.selected ? addSelectedState($card) : removeSelectedState($card);
}

function selectButtonClick(event) {
  let { currentTarget } = event;

  let $card = currentTarget.parentElement;

  let { state } = $.card.selectors($card);

  toggleSelectedCard({ state, $card });

  setStore(function (store) {
    store.playlist.style = $card.getAttribute(attr.data.id);
    return store;
  });

  if (!usingCustomStyle()) resetCustomConfig();
}

export default function () {
  $.button.selects.forEach((button) =>
    button.addEventListener("click", selectButtonClick)
  );
}

export { toggleSelectedCard };

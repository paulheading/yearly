import $ from "#selectors";
import attrs from "#selectors/attrs";
import cnames from "#selectors/cnames";
import resetCustomConfig from "#setters/resetCustomConfig";
import setStore from "#setters/setStore";
import usingCustomStyle from "#using/usingCustomStyle";

function removeSelectedState($card) {
  let { state, targets, $config_pic, $select_button } = $.card.selectors($card);

  if (!state.selected) return;

  [...targets, $.button.build].forEach(function (item) {
    item.classList.remove(cnames["selected-state"]);
  });
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

  [...targets, $.button.build].forEach(function (item) {
    item.classList.add(cnames["selected-state"]);
  });
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
    store.playlist.style = $card.getAttribute(attrs.data.id);
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

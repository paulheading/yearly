import $ from "~scripts/selectors";
import store from "~data/store";

function matchTitleSetValue(setting, title, $input) {
  if (setting.title == title) setting.value = $input.checked;
}

function addInputClickFunction($input, title) {
  store.cards.custom.content[0].settings.forEach((setting) =>
    matchTitleSetValue(setting, title, $input)
  );
}

function addToggleEventListeners($toggle) {
  let $input = $toggle.querySelector("input");
  let title = $toggle.previousElementSibling.innerText;

  $input.addEventListener("click", () => addInputClickFunction($input, title));
}

$.toggles.forEach(addToggleEventListeners);

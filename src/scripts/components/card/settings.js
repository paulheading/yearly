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

function addButtonClickFunction(selectors) {
  let { buttons, settings, button, index } = selectors;

  buttons.forEach((button) => button.removeAttribute("data"));

  button.setAttribute("data", "active");

  settings.forEach(function (setting, number) {
    setting.style.display = number == index ? "block" : "none";
  });
}

function addButtonEventListeners(selectors) {
  selectors.button.addEventListener("click", function () {
    addButtonClickFunction(selectors);
  });
}

$.forEachCard(function (selectors) {
  let { toggles, buttons, settings } = selectors;

  toggles.forEach(addToggleEventListeners);
  buttons.forEach(function (button, index) {
    addButtonEventListeners({
      buttons,
      settings,
      button,
      index,
    });
  });
});

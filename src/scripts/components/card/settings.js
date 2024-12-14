import $ from "~scripts/selectors";
import store from "~data/store";

function matchTitleSetValue(setting, title, $input) {
  if (setting.title == title) setting.value = $input.checked;
}

function addInputClickFunction($input, title) {
  store.cards.custom.content[0].settings.forEach(function (group) {
    group.forEach((setting) => matchTitleSetValue(setting, title, $input));
  });
}

function addToggleEventListeners($toggle) {
  let $setting = $toggle.parentNode;
  let $input = $toggle.querySelector("input");
  let title = $toggle.previousElementSibling.innerText;

  $input.addEventListener("click", function () {
    addInputClickFunction($input, title);

    let $siblings = getSiblings($setting);

    if (!$siblings.length) return;

    $siblings.forEach(function ($sibling) {
      let $input = $sibling.querySelector("input");
      let title = $sibling.firstChild.innerText;

      $input.checked = false;

      addInputClickFunction($input, title);
    });
  });
}

function addButtonClickFunction(selectors) {
  let { $dot_buttons, $settings, button, index } = selectors;

  $dot_buttons.forEach((button) => button.removeAttribute("data"));

  button.setAttribute("data", "active");

  $settings.forEach(function (setting, number) {
    setting.style.display = number == index ? "block" : "none";
  });
}

function getSiblings(element) {
  // for collecting siblings
  let siblings = [];
  // if no parent, return no sibling
  if (!element.parentNode) {
    return siblings;
  }
  // first child of the parent node
  let sibling = element.parentNode.firstChild;

  // collecting siblings
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== element) siblings.push(sibling);
    sibling = sibling.nextSibling;
  }

  return siblings;
}

function addButtonEventListeners(selectors) {
  selectors.button.addEventListener("click", function () {
    addButtonClickFunction(selectors);
  });
}

$.cards.forEach(function ($card) {
  let { selectors } = $.cardSelectors($card);
  let { $toggles, $settings, $dot_buttons } = selectors;

  $toggles.forEach(addToggleEventListeners);
  $dot_buttons.forEach(function (button, index) {
    addButtonEventListeners({
      $dot_buttons,
      $settings,
      button,
      index,
    });
  });
});

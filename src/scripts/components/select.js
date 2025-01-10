import $ from "~scripts/selectors";
import store from "~data/store";
import { keyPress, preventDefault } from "~scripts/helpers";

// https://www.freecodecamp.org/news/how-to-build-an-accessible-custom-dropdown-select-element/

let dropdownIsOpen = [];

let currentOptionIndex = [];

$.select_forms().forEach(function () {
  dropdownIsOpen.push(false);
  currentOptionIndex.push(0);
});

function focusCurrentOption(parent) {
  let { $form, index } = parent;
  let { $items } = $.formSelectors($form);

  let currentOption = $items[currentOptionIndex[index]];

  currentOption.classList.add("current");
  currentOption.focus();
  currentOption.scrollIntoView({ block: "nearest" });

  $items.forEach(function (item) {
    if (item == currentOption) return;
    item.classList.remove("current");
  });
}

function moveFocusUp(parent) {
  let { $form, index } = parent;
  let { $items } = $.formSelectors($form);

  currentOptionIndex[index] > 0
    ? currentOptionIndex[index]--
    : (currentOptionIndex[index] = $items.length - 1);

  focusCurrentOption(parent);
}

function moveFocusDown(parent) {
  let { $form, index } = parent;
  let { $items } = $.formSelectors($form);

  currentOptionIndex[index] < $items.length - 1
    ? currentOptionIndex[index]++
    : (currentOptionIndex[index] = 0);

  focusCurrentOption(parent);
}

function toggleDropdown(parent) {
  let { $form, index } = parent;
  let { $button, $list } = $.formSelectors($form);

  $list.classList.toggle("active");
  dropdownIsOpen[index] = !dropdownIsOpen[index];
  $button.setAttribute("aria-expanded", dropdownIsOpen[index].toString());
}

function handleKeyPress(event, parent) {
  let { key } = event;
  let activeDropdownIsOpen = dropdownIsOpen[parent.index];

  if (!activeDropdownIsOpen) {
    if (!keyPress.isOpenGroup(key)) return;
  }

  if (activeDropdownIsOpen) {
    if (keyPress.isClose(key) || keyPress.isTab(key)) {
      toggleDropdown(parent);
      return;
    }
  }

  event.preventDefault();

  if (!activeDropdownIsOpen) {
    if (keyPress.isOpenGroup(key)) return toggleDropdown(parent);
  }

  if (activeDropdownIsOpen) {
    if (keyPress.isOpen(key)) return selectCurrentOption(parent);
    if (keyPress.isDown(key)) return moveFocusDown(parent);
    if (keyPress.isUp(key)) return moveFocusUp(parent);
  }
}

function toggleActiveState(item, active) {
  active ? item.classList.add("active") : item.classList.remove("active");
  item.setAttribute("aria-selected", active.toString());
  return item;
}

function selectOptionByElement(element, parent) {
  store.selected.playlist = element.getAttribute("data-id");

  let { $form } = parent;

  let { $button, $items } = $.formSelectors($form);

  $button.innerText = element.innerText;

  $items.forEach((item) => toggleActiveState(item, false));

  element = toggleActiveState(element, true);

  toggleDropdown(parent);

  announceOption(element.innerText, parent);
}

function announceOption(text, parent) {
  let { $form } = parent;

  let { $announce } = $.formSelectors($form);

  $announce.innerText = text;
  $announce.setAttribute("aria-live", "assertive");

  setTimeout(function () {
    $announce.innerText = "";
    $announce.setAttribute("aria-live", "off");
  }, 1000);
}

function selectCurrentOption(parent) {
  let { $form, index } = parent;
  let { $items } = $.formSelectors($form);
  let currentOption = $items[currentOptionIndex[index]];

  selectOptionByElement(currentOption, parent);
}

function handleDocumentInteraction(event) {
  let { target } = event;

  $.select_forms().forEach(function ($form, index) {
    let parent = { $form, index };

    let { $button, $list } = $.formSelectors($form);

    let clickIsInsideButton = $button.contains(target);
    let clickIsInsideDropdown = $list.contains(target);

    if (clickIsInsideButton) return toggleDropdown(parent);

    if (!clickIsInsideDropdown && dropdownIsOpen[index])
      return toggleDropdown(parent);
  });
}

function handleItemClicks(item, index, parent) {
  item.addEventListener("click", function () {
    currentOptionIndex[parent.index] = index;
    selectCurrentOption(parent);
  });
}

function clearCurrentItem($form) {
  let { $items } = $.formSelectors($form);

  $items.forEach((item) => item.classList.remove("current"));
}

function setupFormListeners($form, index) {
  let parent = { $form, index };

  $form.addEventListener("submit", preventDefault);

  let { $button, $list, $items } = $.formSelectors($form);

  $button.addEventListener("keydown", (event) => handleKeyPress(event, parent));

  $list.addEventListener("mouseover", () => clearCurrentItem($form));

  $items.forEach((item, index) => handleItemClicks(item, index, parent));
}

export default function () {
  $.select_forms().forEach(setupFormListeners);

  document.addEventListener("click", handleDocumentInteraction);
}

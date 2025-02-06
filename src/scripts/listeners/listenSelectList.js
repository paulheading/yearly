import $ from "~scripts/selectors";
import { keyPress, preventDefault } from "~scripts/helpers";
import { getPlaylistConfig } from "~scripts/getters";

// https://www.freecodecamp.org/news/how-to-build-an-accessible-custom-dropdown-select-element/

let dropdownIsOpen = [];

export let currentOptionIndex = [];

$.query.selectListAll().forEach(function () {
  dropdownIsOpen.push(false);
  currentOptionIndex.push(0);
});

function focusCurrentOption(parent) {
  let { $form, index } = parent;
  let { $items } = $.selectList.selectors($form);

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
  let { $items } = $.selectList.selectors($form);

  currentOptionIndex[index] > 0
    ? currentOptionIndex[index]--
    : (currentOptionIndex[index] = $items.length - 1);

  focusCurrentOption(parent);
}

function moveFocusDown(parent) {
  let { $form, index } = parent;
  let { $items } = $.selectList.selectors($form);

  currentOptionIndex[index] < $items.length - 1
    ? currentOptionIndex[index]++
    : (currentOptionIndex[index] = 0);

  focusCurrentOption(parent);
}

function toggleDropdown(parent) {
  let { $form, index } = parent;
  let { $button, $list } = $.selectList.selectors($form);

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
  let { $form, callback } = parent;

  let card = $form.closest(".card-container")?.getAttribute("data-id");

  let { $button, $items, data } = $.selectList.selectors($form);

  let { snake, group } = data;

  let value = element.getAttribute("data-id");

  $button.setAttribute("data-id", value);

  $button.innerText = element.innerText;

  $items.forEach((item) => toggleActiveState(item, item == element));

  toggleDropdown(parent);

  announceOption(element.innerText, parent);

  if (callback) callback({ card, value, snake, group });
}

function announceOption(text, parent) {
  let { $form } = parent;

  let { $announce } = $.selectList.selectors($form);

  $announce.innerText = text;

  $announce.setAttribute("aria-live", "assertive");

  setTimeout(function () {
    $announce.innerText = "";
    $announce.setAttribute("aria-live", "off");
  }, 1000);
}

export function selectCurrentOption(parent) {
  let { $form, index } = parent;

  let { $items } = $.selectList.selectors($form);

  let currentOption = $items[currentOptionIndex[index]];

  selectOptionByElement(currentOption, parent);
}

function handleDocumentInteraction(event) {
  let { target } = event;

  $.query.selectListAll().forEach(function ($form, index) {
    let parent = { $form, index };

    let { $button, $list } = $.selectList.selectors($form);

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
  let { $items } = $.selectList.selectors($form);

  $items.forEach((item) => item.classList.remove("current"));
}

function setupFormListeners({ $form, index, callback }) {
  let parent = { $form, index, callback };

  $form.addEventListener("submit", preventDefault);

  let { $button, $list, $items } = $.selectList.selectors($form);

  $button.addEventListener("keydown", (event) => handleKeyPress(event, parent));

  $list.addEventListener("mouseover", () => clearCurrentItem($form));

  $items.forEach((item, index) => handleItemClicks(item, index, parent));
}

export default function (callback) {
  $.query.selectListAll().forEach(function ($form, index) {
    let params = { $form, index, callback };
    return setupFormListeners(params);
  });

  document.addEventListener("click", handleDocumentInteraction);
}

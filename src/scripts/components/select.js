import $ from "~scripts/selectors";
import store from "~data/store";
import { keyPress, preventDefault } from "~scripts/helpers";

// https://www.freecodecamp.org/news/how-to-build-an-accessible-custom-dropdown-select-element/

let dropdownIsOpen = false;

let currentOptionIndex = 0;

function focusCurrentOption() {
  let currentOption = $.select_items()[currentOptionIndex];

  currentOption.classList.add("current");
  currentOption.focus();
  currentOption.scrollIntoView({ block: "nearest" });

  $.select_items().forEach(function (item) {
    if (item == currentOption) return;
    item.classList.remove("current");
  });
}

function moveFocusUp() {
  currentOptionIndex > 0
    ? currentOptionIndex--
    : (currentOptionIndex = $.select_items().length - 1);

  focusCurrentOption();
}

function moveFocusDown() {
  currentOptionIndex < $.select_items().length - 1
    ? currentOptionIndex++
    : (currentOptionIndex = 0);

  focusCurrentOption();
}

function toggleDropdown() {
  $.select_list().classList.toggle("active");
  dropdownIsOpen = !dropdownIsOpen;
  $.select_button().setAttribute("aria-expanded", dropdownIsOpen.toString());
}

function handleKeyPress(event) {
  let { key } = event;

  if (!dropdownIsOpen) {
    if (!keyPress.isOpenGroup(key)) return;
  }

  if (dropdownIsOpen) {
    if (keyPress.isClose(key) || keyPress.isTab(key)) {
      toggleDropdown();
      return;
    }
  }

  event.preventDefault();

  if (!dropdownIsOpen) {
    if (keyPress.isOpenGroup(key)) return toggleDropdown();
  }

  if (dropdownIsOpen) {
    if (keyPress.isOpen(key)) return selectCurrentOption();
    if (keyPress.isDown(key)) return moveFocusDown();
    if (keyPress.isUp(key)) return moveFocusUp();
  }
}

function toggleActiveState(item, active) {
  active ? item.classList.add("active") : item.classList.remove("active");
  item.setAttribute("aria-selected", active.toString());
  return item;
}

function selectOptionByElement(element) {
  store.selected.playlist = element.getAttribute("data-id");

  $.select_button().innerText = element.innerText;

  $.select_items().forEach((item) => toggleActiveState(item, false));

  element = toggleActiveState(element, true);

  toggleDropdown();

  announceOption(element.innerText);
}

function announceOption(text) {
  $.select_announce().innerText = text;
  $.select_announce().setAttribute("aria-live", "assertive");

  setTimeout(function () {
    $.select_announce().innerText = "";
    $.select_announce().setAttribute("aria-live", "off");
  }, 1000);
}

function selectCurrentOption() {
  let currentOption = $.select_items()[currentOptionIndex];
  selectOptionByElement(currentOption);
}

function handleDocumentInteraction(event) {
  let { target } = event;

  let clickIsInsideButton = $.select_button().contains(target);
  let clickIsInsideDropdown = $.select_list().contains(target);

  if (clickIsInsideButton) return toggleDropdown();

  if (!clickIsInsideDropdown && dropdownIsOpen) return toggleDropdown();
}

function handleItemClicks(item, index) {
  item.addEventListener("click", function () {
    currentOptionIndex = index;
    selectCurrentOption();
  });
}

function clearCurrentItem() {
  $.select_items().forEach((item) => item.classList.remove("current"));
}

export default function () {
  $.select_form().addEventListener("submit", preventDefault);

  $.select_button().addEventListener("keydown", handleKeyPress);

  $.select_list().addEventListener("mouseover", clearCurrentItem);

  $.select_items().forEach(handleItemClicks);

  document.addEventListener("click", handleDocumentInteraction);
}

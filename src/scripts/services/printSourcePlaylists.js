// import $ from "~scripts/selectors";
import store from "~data/store";

// https://www.freecodecamp.org/news/how-to-build-an-accessible-custom-dropdown-select-element/

let $select_form = () => document.querySelector(".select-form");
let $select_list = () => $select_form().querySelector(".select-list");
let $select_items = () => $select_form().querySelectorAll(".select-item");
let $select_button = () => $select_form().querySelector(".select-button");
let $announcement_div = () => $select_form().querySelector(".announcement");

let dropdownIsOpen = false;

let currentOptionIndex = 0;

let $key = {};

$key.isMatch = (key, array) => array.includes(key);

$key.isOpen = (key) => $key.isMatch(key, ["Enter", " "]);

$key.isClose = (key) => $key.isMatch(key, ["Escape"]);

$key.isDown = (key) => $key.isMatch(key, ["ArrowDown"]);

$key.isUp = (key) => $key.isMatch(key, ["ArrowUp"]);

$key.isTab = (key) => $key.isMatch(key, ["Tab"]);

$key.isOpenGroup = function (key) {
  return $key.isOpen(key) || $key.isUp(key) || $key.isDown(key);
};

let $focus = {};

$focus.currentOption = function () {
  let currentOption = $select_items()[currentOptionIndex];

  currentOption.classList.add("current");
  currentOption.focus();
  currentOption.scrollIntoView({ block: "nearest" });

  $select_items().forEach(function (item) {
    if (item == currentOption) return;
    item.classList.remove("current");
  });
};

$focus.moveUp = function () {
  currentOptionIndex > 0
    ? currentOptionIndex--
    : (currentOptionIndex = $select_items().length - 1);

  $focus.currentOption();
};

$focus.moveDown = function () {
  currentOptionIndex < $select_items().length - 1
    ? currentOptionIndex++
    : (currentOptionIndex = 0);

  $focus.currentOption();
};

function printSourceOption(source) {
  let option = document.createElement("li");

  option.classList.add("select-item");

  option.setAttribute("data-id", source.id);

  option.innerText = source.name;

  option.role = "option";

  $select_list().appendChild(option);
}

function toggleDropdown() {
  $select_list().classList.toggle("active");
  dropdownIsOpen = !dropdownIsOpen;
  $select_button().setAttribute("aria-expanded", dropdownIsOpen.toString());
}

function handleKeyPress(event) {
  let { key } = event;

  if (!dropdownIsOpen) {
    if (!$key.isOpenGroup(key)) return;
  }

  if (dropdownIsOpen) {
    if ($key.isClose(key) || $key.isTab(key)) {
      toggleDropdown();
      return;
    }
  }

  event.preventDefault();

  if (!dropdownIsOpen) {
    if ($key.isOpenGroup(key)) return toggleDropdown();
  }

  if (dropdownIsOpen) {
    if ($key.isOpen(key)) return selectCurrentOption();
    if ($key.isDown(key)) return $focus.moveDown();
    if ($key.isUp(key)) return $focus.moveUp();
  }
}

function deactivateItem(item) {
  item.classList.remove("active");
  item.setAttribute("aria-selected", "false");
  return item;
}

function activateItem(item) {
  item.classList.add("active");
  item.setAttribute("aria-selected", "true");
  return item;
}

function selectOptionByElement(element) {
  $select_button().setAttribute("data-id", element.getAttribute("data-id"));

  $select_button().innerText = element.innerText;

  $select_items().forEach(deactivateItem);

  element = activateItem(element);

  toggleDropdown();

  announceOption(element.innerText);
}

function announceOption(text) {
  $announcement_div().innerText = text;
  $announcement_div().setAttribute("aria-live", "assertive");

  setTimeout(function () {
    $announcement_div().innerText = "";
    $announcement_div().setAttribute("aria-live", "off");
  }, 1000);
}

function selectCurrentOption() {
  let currentOption = $select_items()[currentOptionIndex];
  selectOptionByElement(currentOption);
}

function handleDocumentInteraction(event) {
  let { target } = event;

  let clickIsInsideButton = $select_button().contains(target);
  let clickIsInsideDropdown = $select_list().contains(target);

  if (clickIsInsideButton) return toggleDropdown();

  if (!clickIsInsideDropdown && dropdownIsOpen) return toggleDropdown();
}

function handleItemClick(index) {
  currentOptionIndex = index;
  selectCurrentOption();
}

function clearCurrentItem() {
  $select_items().forEach((item) => item.classList.remove("current"));
}

export default function () {
  store.sources.forEach(printSourceOption);

  $select_form().addEventListener("submit", (event) => event.preventDefault());

  $select_button().addEventListener("keydown", handleKeyPress);

  $select_list().addEventListener("mouseover", clearCurrentItem);

  $select_items().forEach((item, index) =>
    item.addEventListener("click", () => handleItemClick(index))
  );

  document.addEventListener("click", handleDocumentInteraction);
}

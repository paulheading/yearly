import $ from "~scripts/selectors";
import { keyPress, preventDefault } from "~scripts/helpers";

export let currentOptionIndex = [];

function handleDocumentInteraction(target) {
  $.setting.selects.forEach(function ($form) {
    let { $button, data, $list } = $.selectForm.selectors($form);

    let isInsideButton = $button.contains(target);

    let isInsideList = $list.contains(target);

    let stateIsOpen = data.state == "open";

    if (isInsideButton) return toggleFormState(target);

    if (!isInsideList && stateIsOpen) return toggleFormState($list);
  });
}

function getCurrentItem($items, callback) {
  $items.forEach(function ($item, index) {
    let isCurrent = $item.classList.contains("current");

    if (!isCurrent) return;

    if (callback) callback($item, index);
  });
}

function changeCurrentFocus({ $items, increment }) {
  let isForward = increment > 0;
  let lastItem = $items.length - 1;
  let focus = 0;

  function callback($item, index) {
    focus = index + increment;

    if (isForward && index == lastItem) focus = 0;

    if (!isForward && index == 0) focus = lastItem;

    $item.classList.remove("current");
  }

  getCurrentItem($items, callback);

  let $currentFocus = $items[focus];

  $currentFocus.classList.add("current");
  $currentFocus.focus();
  $currentFocus.scrollIntoView({ block: "nearest" });
}

function moveFocusUp(target) {
  let $form = target.closest("form");
  let { $items } = $.selectForm.selectors($form);

  changeCurrentFocus({ $items, increment: -1 });
}

function moveFocusDown(target) {
  let $form = target.closest("form");
  let { $items } = $.selectForm.selectors($form);

  changeCurrentFocus({ $items, increment: 1 });
}

function toggleActiveItem({ $item, active }) {
  active ? $item.classList.add("active") : $item.classList.remove("active");
  $item.setAttribute("aria-selected", active.toString());
}

export function selectCurrentOption(target) {
  let $form = target.closest("form");

  let { tagName } = target;

  let { $items, $button } = $.selectForm.selectors($form);

  let isButton = tagName == "BUTTON";

  if (isButton) target = $items[0];

  let value = target.getAttribute("data_id");

  $button.setAttribute("data_id", value);

  $button.innerText = target.innerText;

  $items.forEach(function ($item) {
    toggleActiveItem({ $item, active: $item == target });
  });

  toggleFormState(target);
}

function handleItemClicks($item) {
  $item.addEventListener("click", ({ target }) => selectCurrentOption(target));
}

function toggleFormState(target) {
  let $form = target.closest("form");

  let { data, $button } = $.selectForm.selectors($form);

  let stateIsClosed = data.state == "closed";

  $form.setAttribute("data_state", stateIsClosed ? "open" : "closed");

  $button.setAttribute("aria-expanded", stateIsClosed.toString());
}

function handleKeyPress(event) {
  let { key, target } = event;
  let $form = target.closest("form");
  let { data } = $.selectForm.selectors($form);

  let formIsClosed = data.state == "closed";

  if (formIsClosed) {
    if (!keyPress.isOpenGroup(key)) return;
  }

  if (!formIsClosed) {
    if (keyPress.isClose(key) || keyPress.isTab(key))
      return toggleFormState(target);
  }

  event.preventDefault();

  if (formIsClosed) {
    if (keyPress.isOpenGroup(key)) return toggleFormState(target);
  }

  if (!formIsClosed) {
    if (keyPress.isOpen(key)) {
      let $form = target.closest("form");
      let { $items } = $.selectForm.selectors($form);

      getCurrentItem($items, ($item) => selectCurrentOption($item));
    }
    if (keyPress.isDown(key)) return moveFocusDown(target);
    if (keyPress.isUp(key)) return moveFocusUp(target);
  }
}

function setupFormListeners($form) {
  $form.addEventListener("submit", preventDefault);

  let { $button, $items } = $.selectForm.selectors($form);

  $button.addEventListener("keydown", handleKeyPress);

  $items.forEach(handleItemClicks);
}

export default function () {
  $.setting.selects.forEach(setupFormListeners);

  document.addEventListener("click", function ({ target }) {
    handleDocumentInteraction(target);
  });
}

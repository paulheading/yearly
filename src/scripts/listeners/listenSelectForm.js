import $ from "~scripts/selectors";
import attr from "~scripts/selectors/attributes";
import setCardSetting from "~scripts/setters/setCardSetting";
import settings from "~data/settings";
import setSource from "~scripts/setters/setSource";
import keyPress from "~scripts/helpers/keyPress";
import preventDefault from "~scripts/helpers/preventDefault";

import { selectForm } from "~scripts/selectors/data";

function handleDocumentInteraction(target) {
  $.query.settingType("select").forEach(function ($form) {
    let { $list, click, state } = $.selectForm.selectors($form);

    if (click.insideButton(target)) {
      return toggleFormState(target);
    }

    if (!click.insideList(target) && !state.isClosed())
      return toggleFormState($list);
  });
}

function getCurrentItem($items, callback) {
  $items.forEach(function ($item, index) {
    let isCurrent = $item.classList.contains("current");

    if (!isCurrent) return;

    if (callback) callback($item, index);
  });
}

function focusOnItem($item) {
  $item.focus();
  $item.scrollIntoView({ block: "nearest" });
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

  let $nextFocus = $items[focus];

  $nextFocus.classList.add("current");

  focusOnItem($nextFocus);
}

function toggleActiveItem({ $item, active }) {
  active ? $item.classList.add("active") : $item.classList.remove("active");
  $item.setAttribute("aria-selected", active.toString());
}

function setFormButton({ $button, innerText, value }) {
  $button.setAttribute(attr.data.id, value);
  $button.innerText = innerText;
}

function selectCurrentOption(target) {
  let $form = target.closest("form");

  let { tagName } = target;

  let { $items, $button, data } = $.selectForm.selectors($form);

  let isButton = tagName == "BUTTON";

  if (isButton) target = $items[0];

  let { innerText } = target;

  let value = target.getAttribute(attr.data.id);

  setFormButton({ $button, innerText, value });

  let { card, snake } = data;

  let setting = settings[snake];

  $items.forEach(function ($item) {
    toggleActiveItem({ $item, active: $item == target });
  });

  toggleFormState(target);

  if (!setting) {
    if (snake == selectForm.choose_source) {
      setSource({ title: innerText, id: value });
    }
  } else {
    setCardSetting({ card, setting, value });
  }
}

function handleItemClicks($item) {
  $item.addEventListener("click", ({ target }) => selectCurrentOption(target));
}

function toggleFormState(target) {
  let $form = target.closest("form");

  let { $button, state } = $.selectForm.selectors($form);

  $form.setAttribute("data_state", state.isClosed() ? "open" : "closed");

  $button.setAttribute("aria-expanded", state.isClosed().toString());
}

function handleKeyPress(event) {
  let { key, target } = event;
  let $form = target.closest("form");
  let { state, $items } = $.selectForm.selectors($form);

  if (state.isClosed()) {
    if (!keyPress.isOpenGroup(key)) return;
  }

  if (!state.isClosed()) {
    if (keyPress.isClose(key) || keyPress.isTab(key))
      return toggleFormState(target);
  }

  event.preventDefault();

  if (state.isClosed()) {
    if (keyPress.isOpenGroup(key)) return toggleFormState(target);
  }

  if (!state.isClosed()) {
    if (keyPress.isOpen(key)) {
      getCurrentItem($items, ($item) => selectCurrentOption($item));
    }
    if (keyPress.isDown(key)) {
      return changeCurrentFocus({ $items, increment: 1 });
    }

    if (keyPress.isUp(key)) {
      return changeCurrentFocus({ $items, increment: -1 });
    }
  }
}

function setupFormListeners($form) {
  $form.addEventListener("submit", preventDefault);

  let { $button, $items } = $.selectForm.selectors($form);

  $button.addEventListener("keydown", handleKeyPress);

  $items.forEach(handleItemClicks);
}

export {
  setFormButton,
  toggleActiveItem,
  focusOnItem,
  setupFormListeners,
  handleDocumentInteraction,
};

export default function () {
  $.setting.selects.forEach(setupFormListeners);
}

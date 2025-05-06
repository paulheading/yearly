import $ from "~scripts/selectors";
import attrs from "~scripts/selectors/attrs";
import setCardSetting from "~scripts/setters/setCardSetting";
import settings from "~data/settings";
import setSource from "~scripts/setters/setSource";
import keyPress from "~scripts/helpers/keyPress";
import preventDefault from "~scripts/helpers/preventDefault";

import _data from "~scripts/selectors/data";
import cnames from "~scripts/selectors/cnames";

let formState = {};

function handleDocumentInteraction(target) {
  $.query.settingType("select").forEach(function ($form) {
    let { $list, click, state } = $.selectForm.selectors($form);

    if (click.insideButton(target)) {
      return formState.toggle(target);
    }

    if (!click.insideList(target) && !state.isClosed())
      return formState.toggle($list);
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

function announceActiveItem(target) {
  let $form = target.closest("." + cnames.selectForm.form);
  let { $announce } = $.selectForm.selectors($form);

  $announce.innerText = target.innerText;
  $announce.setAttribute(attrs.aria.live, "assertive");

  setTimeout(function () {
    $announce.innerText = "";
    $announce.setAttribute(attrs.aria.live, "off");
  }, 1000);
}

function toggleActiveItem({ $item, active }) {
  active ? $item.classList.add("active") : $item.classList.remove("active");
  $item.setAttribute(attrs.aria.selected, active.toString());

  if (active) announceActiveItem($item);
}

function setFormButton({ $button, innerText, value }) {
  $button.setAttribute(attrs.data.id, value);
  $button.innerText = innerText;
}

function selectCurrentOption(target) {
  let $form = target.closest("." + cnames.selectForm.form);

  let { tagName } = target;

  let { $items, $button, data } = $.selectForm.selectors($form);

  let isButton = tagName == "BUTTON";

  if (isButton) target = $items[0];

  let { innerText } = target;

  let value = target.getAttribute(attrs.data.id);

  setFormButton({ $button, innerText, value });

  let { card, snake } = data;

  let setting = settings[snake];

  $items.forEach(function ($item) {
    toggleActiveItem({ $item, active: $item == target });
  });

  formState.close($form);

  if (!setting) {
    if (snake == _data.selectForm.choose_source) {
      setSource({ title: innerText, id: value });
    }
  } else {
    setCardSetting({ card, setting, value });
  }
}

function handleItemClicks($item) {
  $item.addEventListener("click", ({ target }) => selectCurrentOption(target));
}

formState.close = function ($form) {
  let { $button } = $.selectForm.selectors($form);

  $form.setAttribute(attrs.data.state, "closed");

  $button.setAttribute(attrs.aria.expanded, "false");
};

formState.open = function ($form) {
  let { $button } = $.selectForm.selectors($form);

  $form.setAttribute(attrs.data.state, "open");

  $button.setAttribute(attrs.aria.expanded, "true");
};

formState.toggle = function (target) {
  let $form = target.closest("." + cnames.selectForm.form);

  let { state } = $.selectForm.selectors($form);

  state.isClosed() ? formState.open($form) : formState.close($form);
};

function handleKeyPress(event) {
  let { key, target } = event;
  let $form = target.closest("." + cnames.selectForm.form);
  let { state, $items } = $.selectForm.selectors($form);

  if (state.isClosed()) {
    if (!keyPress.isOpenGroup(key)) return;
  }

  if (!state.isClosed()) {
    if (keyPress.isClose(key) || keyPress.isTab(key))
      return formState.toggle(target);
  }

  event.preventDefault();

  if (state.isClosed()) {
    if (keyPress.isOpenGroup(key)) return formState.toggle(target);
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
  selectCurrentOption,
  focusOnItem,
  setupFormListeners,
  handleDocumentInteraction,
};

export default function () {
  $.setting.selects.forEach(setupFormListeners);
}

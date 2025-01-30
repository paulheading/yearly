import $ from "~scripts/selectors";

export default function (element, value) {
  let styleIsAlreadyActive = $.section[element].style.display == value;

  if (styleIsAlreadyActive) return;

  $.section[element].style.display = value;
}

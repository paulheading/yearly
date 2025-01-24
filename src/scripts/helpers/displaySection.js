import $ from "~scripts/selectors";

export default function (element, value) {
  let styleIsAlreadyActive = $.sections[element].style.display == value;

  if (styleIsAlreadyActive) return;

  $.sections[element].style.display = value;
}

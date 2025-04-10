import $ from "~scripts/selectors";

export default function (element, value) {
  let section = $.section[element];

  let styleIsAlreadyActive = section.style.display == value;

  if (styleIsAlreadyActive) return;

  section.style.display = value;
}

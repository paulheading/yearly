import $ from "~scripts/selectors";
import createChooseSource from "~scripts/creators/createChooseSource";

export default function () {
  $.button.source.addEventListener("click", createChooseSource);
}

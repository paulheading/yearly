import displaySection from "~scripts/display/displaySection";
import $ from "~scripts/selectors";
import { section } from "~scripts/selectors/data";

function chooseSourceClick() {
  let label = section.select_form_row;

  let isHidden = $.section[label].style.display == "none";

  if (isHidden) {
    displaySection(label, "block");
    return;
  }

  let parent = $.section[label].parentElement;

  let test = $.section[label].cloneNode(true);

  parent.append(test);

  // let rows = document.querySelectorAll("." + className);

  // console.log("rows: ", rows);

  // displaySection(label, "block");
}

export default function () {
  $.button.source.addEventListener("click", chooseSourceClick);
}

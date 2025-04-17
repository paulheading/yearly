import $ from "~scripts/selectors";
import { section } from "~scripts/selectors/data";
import listenChooseSourceForm from "~scripts/listeners/listenChooseSourceForm";

export default function (event) {
  let { currentTarget } = event;

  currentTarget.classList.add("active");

  let targets = $.query.selectorAll("." + section.select_form_row);

  let isSingleRow = targets.length == 1 && targets[0].style.display == "none";

  if (isSingleRow) {
    targets[0].style.display = "grid";
    return;
  }

  let $parent = targets[0].parentElement;

  let $row = targets[0].cloneNode(true);

  $parent.append(listenChooseSourceForm($row));
}

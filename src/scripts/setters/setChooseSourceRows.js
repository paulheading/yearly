import { handleSelectForm } from "paully/handlers";
import $ from "#selectors";
import data from "#selectors/data";
import listenChooseSourceForm from "#listeners/listenChooseSourceForm";
import cnames from "#selectors/cnames";
import attrs from "#selectors/attrs";

let { selectCurrentOption } = handleSelectForm;

function setChooseSourceFormDefaults($form, source) {
  let { $items } = $.selectForm.selectors($form);

  $items.forEach(function ($item) {
    let id = $item.getAttribute(attrs.data.id);

    if (id != source.id) return;

    selectCurrentOption($item);
  });
}

export default function ($button, source) {
  $button.classList.add("active");

  let targets = $.query.selectorAll("." + data.section.select_form_row);

  let isSingleRow = targets.length == 1 && targets[0].style.display == "none";

  if (isSingleRow) {
    targets[0].style.display = "grid";

    let $form = targets[0].querySelector("." + cnames.selectForm.form);

    if (source) setChooseSourceFormDefaults($form, source);

    return;
  }

  let $parent = targets[0].parentElement;

  let $row = targets[0].cloneNode(true);

  if (source) setChooseSourceFormDefaults($row, source);

  $parent.append(listenChooseSourceForm($row));
}

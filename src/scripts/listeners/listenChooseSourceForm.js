import { handleSelectForm } from "paully/handlers";
import cnames from "#selectors/cnames";
import { doRemoveRow } from "#listeners/listenRemoveRowButton";

let { setupFormListeners } = handleSelectForm;

export default function ($row) {
  let $remove = $row.querySelector("." + cnames.button.remove_row);

  let $form = $row.querySelector("." + cnames.selectForm.form);

  setupFormListeners($form);

  $remove.addEventListener("click", doRemoveRow);

  return $row;
}

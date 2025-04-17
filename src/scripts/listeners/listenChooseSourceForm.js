import cnames from "~scripts/selectors/cnames";
import label from "~scripts/selectors/labels";
import { setupFormListeners } from "~scripts/listeners/listenSelectForm";
import { doRemoveRow } from "~scripts/listeners/listenRemoveRowButton";

export default function ($row) {
  let $remove = $row.querySelector("." + cnames.button.remove_row);

  let $form = $row.querySelector(label.selectForm());

  setupFormListeners($form);

  $remove.addEventListener("click", doRemoveRow);

  return $row;
}

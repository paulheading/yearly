import { handleSelectForm } from "paully/handlers";
import $ from "~scripts/selectors";

let { setupFormListeners } = handleSelectForm;

export default function () {
  $.setting.selects.forEach(setupFormListeners);
}

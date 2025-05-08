import { handleSelectForm } from "paully/handlers";
import $ from "#selectors";

let { setupFormListeners } = handleSelectForm;

export default function () {
  let $forms = [...$.selectForm.choose_sources(), ...$.setting.selects];

  $forms.forEach(setupFormListeners);
}

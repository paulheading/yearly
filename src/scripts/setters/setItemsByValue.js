import { handleSelectForm } from "paully/handlers";
import $ from "~scripts/selectors";
import attrs from "~scripts/selectors/attrs";

let { setFormButton, toggleActiveItem } = handleSelectForm;

export default function ({ $form, value }) {
  let { $items, $button } = $.selectForm.selectors($form);

  $items.forEach(function ($item) {
    let data_id = $item.getAttribute(attrs.data.id);
    let active = data_id == value;

    toggleActiveItem({ $item, active });

    if (!active) return;

    let { innerText } = $item;

    setFormButton({ $button, innerText, value });
  });
}

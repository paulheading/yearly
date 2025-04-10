import $ from "~scripts/selectors";
import attr from "~scripts/selectors/attributes";
import {
  setFormButton,
  toggleActiveItem,
} from "~scripts/listeners/listenSelectForm";

export default function ({ $form, value }) {
  let { $items, $button } = $.selectForm.selectors($form);

  $items.forEach(function ($item) {
    let data_id = $item.getAttribute(attr.data.id);
    let active = data_id == value;

    toggleActiveItem({ $item, active });

    if (!active) return;

    let { innerText } = $item;

    setFormButton({ $button, innerText, value });
  });
}

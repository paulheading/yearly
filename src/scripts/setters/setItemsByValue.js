import $ from "~scripts/selectors";
import {
  setFormButton,
  toggleActiveItem,
} from "~scripts/listeners/listenSelectForm";

export default function ({ $form, value }) {
  let { $items, $button } = $.selectForm.selectors($form);

  $items.forEach(function ($item) {
    let data_id = $item.getAttribute("data_id");
    let active = data_id == value;

    toggleActiveItem({ $item, active });

    if (!active) return;

    let { innerText } = $item;

    setFormButton({ $button, innerText, value });
  });
}

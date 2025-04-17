import $ from "~scripts/selectors";
import attrs from "~scripts/selectors/attrs";

export default function () {
  let sources = [];

  $.selectForm.choose_sources().forEach(function ($form) {
    let { $button } = $.selectForm.selectors($form);

    let title = $button.innerText;

    let id = $button.getAttribute(attrs.data.id);

    let source = { title, id };

    let alreadyAdded = sources.some((item) => item.id == source.id);

    if (!alreadyAdded) sources.push(source);
  });

  return sources;
}

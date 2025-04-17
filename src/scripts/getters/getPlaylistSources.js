import $ from "~scripts/selectors";

export default function () {
  let sources = [];

  $.selectForm.choose_sources().forEach(function ($form) {
    let { $button } = $.selectForm.selectors($form);

    let title = $button.innerText;

    let id = $button.getAttribute("data_id");

    let source = { title, id };

    let alreadyAdded = sources.some((item) => item.id == source.id);

    if (!alreadyAdded) sources.push(source);
  });

  return sources;
}

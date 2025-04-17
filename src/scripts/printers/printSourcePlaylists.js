import $ from "~scripts/selectors";
import attrs from "~scripts/selectors/attrs";
import getStore from "~scripts/getters/getStore";
import cnames from "~scripts/selectors/cnames";

function printSourceOption(source) {
  let $form = $.selectForm.choose_sources()[0];

  if (!$form) return console.warn("form missing");

  let { $list } = $.selectForm.selectors($form);

  let option = document.createElement("li");

  option.classList.add(cnames.selectForm.item);

  option.setAttribute(attrs.data.id, source.id);

  option.innerText = source.name;

  option.role = "option";

  $list.appendChild(option);
}

export default function () {
  getStore().user.playlists.forEach(printSourceOption);
}

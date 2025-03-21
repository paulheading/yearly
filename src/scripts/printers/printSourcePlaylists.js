import $ from "~scripts/selectors";
import getStore from "~scripts/getters/getStore";

function printSourceOption(source) {
  let $form = $.selectForm.choose_source;

  let { $list } = $.selectForm.selectors($form);

  let option = document.createElement("li");

  option.classList.add("select-form-item");

  option.setAttribute("data_id", source.id);

  option.innerText = source.name;

  option.role = "option";

  $list.appendChild(option);
}

export default function () {
  getStore().user.playlists.forEach(printSourceOption);
}

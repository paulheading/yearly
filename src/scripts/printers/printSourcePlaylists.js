import $ from "~scripts/selectors";
import getStore from "~scripts/store/getStore";

function printSourceOption(source) {
  let $form = $.selectList.choose_source;

  let { $list } = $.selectList.selectors($form);

  let option = document.createElement("li");

  option.classList.add("select-form-item");

  option.setAttribute("data-id", source.id);

  option.innerText = source.name;

  option.role = "option";

  $list.appendChild(option);
}

export default function () {
  getStore().user.playlists.forEach(printSourceOption);
}

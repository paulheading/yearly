import store from "~data/store";
import $ from "~scripts/selectors";

function printSourceOption(source) {
  let option = document.createElement("li");

  option.classList.add("select-form-item");

  option.setAttribute("data-id", source.id);

  option.innerText = source.name;

  option.role = "option";

  $.select_list().appendChild(option);
}

export default function () {
  store.user.playlists.forEach(printSourceOption);
}

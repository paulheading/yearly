import $ from "~scripts/selectors";
import store from "~data/store";

function printSourceOption(source) {
  let option = document.createElement("option");

  option.value = source.id;
  option.text = source.name;

  $.select.appendChild(option);
}

export default function () {
  store.sources.forEach(printSourceOption);
}

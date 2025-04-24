import $ from "~scripts/selectors";
import setChooseSourceRows from "~scripts/setters/setChooseSourceRows";

export default function () {
  $.button.source.addEventListener("click", function (event) {
    let { currentTarget } = event;
    setChooseSourceRows(currentTarget);
  });
}

import $ from "#selectors";
import setChooseSourceRows from "#setters/setChooseSourceRows";

export default function () {
  $.button.source.addEventListener("click", function (event) {
    let { currentTarget } = event;
    setChooseSourceRows(currentTarget);
  });
}

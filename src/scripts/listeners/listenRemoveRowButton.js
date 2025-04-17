import $ from "~scripts/selectors";
import getSiblings from "~scripts/getters/getSiblings";

function doRemoveRow(event) {
  let { target } = event;

  let parent = target.parentElement;

  let isOnlyRow = getSiblings(parent).length == 0;

  if (isOnlyRow) {
    parent.style.display = "none";
    $.button.source.classList.remove("active");
    return;
  }

  parent.remove();
}

export default function () {
  $.button.remove_rows.forEach(function ($button) {
    $button.addEventListener("click", doRemoveRow);
  });
}

export { doRemoveRow };

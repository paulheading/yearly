import $ from "~scripts/selectors";

export default function (callback) {
  $.setting.toggles.forEach(function ($toggle) {
    let { $input } = $.setting.selectors($toggle);

    $input.addEventListener("change", function (event) {
      let card = $toggle.closest(".card-container")?.getAttribute("data-id");

      let name = $toggle.getAttribute("data-name");

      let value = event.currentTarget.checked;

      if (callback) callback({ card, value, name });
    });
  });
}

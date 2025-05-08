import $ from "#selectors";
import printPlaylistImage from "#printers/printPlaylistImage";

export default function () {
  $.button.refresh.addEventListener("click", printPlaylistImage);
}

import $ from "~scripts/selectors";
import printPlaylistImage from "~scripts/printers/printPlaylistImage";

export default function () {
  $.button.refresh.addEventListener("click", printPlaylistImage);
}

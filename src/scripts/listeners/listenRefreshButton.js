import $ from "~scripts/selectors";
import { printPlaylistImage } from "~scripts/printers";

export default function() {
  $.button.refresh.addEventListener("click", printPlaylistImage);
}



import $ from "~scripts/selectors";
import { printPlaylistImage } from "~scripts/printers";

let refreshButtonClick = () => printPlaylistImage();

$.button.refresh.addEventListener("click", refreshButtonClick);

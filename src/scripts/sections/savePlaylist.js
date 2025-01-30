import $ from "~scripts/selectors";
import { setPlaylistImage } from "~scripts/setters";

let refreshButtonClick = () => setPlaylistImage();

$.button.refresh.addEventListener("click", refreshButtonClick);

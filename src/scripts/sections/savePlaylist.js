import $ from "~scripts/selectors";
import { setPlaylistImage } from "~scripts/setters";

let refreshButtonClick = () => setPlaylistImage();

$.buttons.refresh.addEventListener("click", refreshButtonClick);

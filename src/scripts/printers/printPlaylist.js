import printPlaylistInfo from "~scripts/printers/printPlaylistInfo";
import printPlaylistImage from "~scripts/printers/printPlaylistImage";
import printPlaylistTracks from "~scripts/printers/printPlaylistTracks";

export default function () {
  printPlaylistInfo();
  printPlaylistImage();
  printPlaylistTracks();
}

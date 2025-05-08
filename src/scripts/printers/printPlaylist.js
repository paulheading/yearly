import printPlaylistInfo from "#printers/printPlaylistInfo";
import printPlaylistImage from "#printers/printPlaylistImage";
import printPlaylistTracks from "#printers/printPlaylistTracks";

export default function () {
  printPlaylistInfo();
  printPlaylistImage();
  printPlaylistTracks();
}

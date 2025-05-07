import listenSaveButton from "~scripts/listeners/listenSaveButton";
import listenBackButton from "~scripts/listeners/listenBackButton";
import listenRefreshButton from "~scripts/listeners/listenRefreshButton";
import printPlaylistConfig from "~scripts/printers/printPlaylistConfig";
import printPlaylistSections from "~scripts/printers/printPlaylistSections";

export default function () {
  listenSaveButton();
  listenBackButton();
  listenRefreshButton();
  printPlaylistConfig();
  printPlaylistSections();
}

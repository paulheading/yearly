import listenSaveButton from "~scripts/listeners/listenSaveButton";
import listenBackButton from "~scripts/listeners/listenBackButton";
import listenRefreshButton from "~scripts/listeners/listenRefreshButton";
import printPlaylistConfig from "~scripts/printers/printPlaylistConfig";
import printPlaylistSections from "~scripts/printers/printPlaylistSections";
import printYearAdded from "~scripts/printers/printYearAdded";

export default function () {
  printYearAdded();
  listenSaveButton();
  listenBackButton();
  // listenRefreshButton();
  printPlaylistConfig();
  printPlaylistSections();
}

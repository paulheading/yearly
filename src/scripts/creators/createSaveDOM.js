import listenSaveButton from "#listeners/listenSaveButton";
import listenBackButton from "#listeners/listenBackButton";
import listenRefreshButton from "#listeners/listenRefreshButton";
import printPlaylistConfig from "#printers/printPlaylistConfig";
import printPlaylistSections from "#printers/printPlaylistSections";

export default function () {
  listenSaveButton();
  listenBackButton();
  listenRefreshButton();
  printPlaylistConfig();
  printPlaylistSections();
}

import printSourcePlaylists from "#printers/printSourcePlaylists";
import printFirstName from "#printers/printFirstName";

import listenBuildButton from "#listeners/listenBuildButton";
import listenCustomButton from "#listeners/listenCustomButton";
import listenDotButtons from "#listeners/listenDotButtons";
import listenInfoButton from "#listeners/listenInfoButton";
import listenRangeInput from "#listeners/listenRangeInput";
import listenSelectButton from "#listeners/listenSelectButton";
import listenToggleInput from "#listeners/listenToggleInput";
import listenChooseSourceButton from "#listeners/listenChooseSourceButton";
import listenRemoveRowButton from "#listeners/listenRemoveRowButton";
import listenSelectForm from "#listeners/listenSelectForm";

export default function () {
  printFirstName();
  printSourcePlaylists();

  listenRemoveRowButton();
  listenToggleInput();
  listenRangeInput();
  listenSelectForm();
  listenInfoButton();
  listenSelectButton();
  listenCustomButton();
  listenDotButtons();
  listenBuildButton();
  listenChooseSourceButton();
}

import { handleSelectForm } from "paully/handlers";

import printSourcePlaylists from "~scripts/printers/printSourcePlaylists";
import printFirstName from "~scripts/printers/printFirstName";

import listenBuildButton from "~scripts/listeners/listenBuildButton";
import listenCustomButton from "~scripts/listeners/listenCustomButton";
import listenDotButtons from "~scripts/listeners/listenDotButtons";
import listenInfoButton from "~scripts/listeners/listenInfoButton";
import listenRangeInput from "~scripts/listeners/listenRangeInput";
import listenSelectButton from "~scripts/listeners/listenSelectButton";
import listenToggleInput from "~scripts/listeners/listenToggleInput";
import listenChooseSourceButton from "~scripts/listeners/listenChooseSourceButton";
import listenRemoveRowButton from "~scripts/listeners/listenRemoveRowButton";
import listenDocument from "~scripts/listeners/listenDocument";
import listenSelectForm from "~scripts/listeners/listenSelectForm";

let { handleDocumentInteraction } = handleSelectForm;

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

  listenDocument(function (target) {
    handleDocumentInteraction(target);
  });
}

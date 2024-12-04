import { loadingComplete } from "~scripts/helpers";
import { setAccessToken, setUser } from "~scripts/services";
import customButtonListener from "~scripts/components/buttons/custom";
import infoButtonListener from "~scripts/components/buttons/info";
import selectButtonListener from "~scripts/components/buttons/select";
import buildButtonListener from "~scripts/components/buttons/build";
import backButtonListener from "~scripts/components/buttons/back";
import saveButtonListener from "~scripts/components/buttons/save";

import $ from "~scripts/selectors";

setAccessToken()
  .then(setUser)
  .then(function () {
    function showElements() {
      $.sections.choose_card.style.display = "initial";
    }
    loadingComplete(showElements);
  })
  .then(function () {
    infoButtonListener();
    selectButtonListener();
    customButtonListener();
    buildButtonListener();
    backButtonListener();
    saveButtonListener();
  });

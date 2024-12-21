import { displaySection, loadingComplete } from "~scripts/helpers";
import { setAccessToken, setUser, useLiveData } from "~scripts/services";
import customButtonListener from "~scripts/components/buttons/custom";
import infoButtonListener from "~scripts/components/buttons/info";
import selectButtonListener from "~scripts/components/buttons/select";
import buildButtonListener from "~scripts/components/buttons/build";
import backButtonListener from "~scripts/components/buttons/back";
import saveButtonListener from "~scripts/components/buttons/save";

import store from "~data/store";
import user from "~data/user";
import $ from "~scripts/selectors";

import range from "~scripts/components/card/settings/range";

if (useLiveData) {
  setAccessToken()
    .then(setUser)
    .then(function () {
      function showElements() {
        displaySection("choose_card", "block");
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
}

if (!useLiveData) {
  async function setUser() {
    store.user = user;
    $.print.firstname.innerText = store.user.first_name;
  }

  setUser()
    .then(function () {
      function showElements() {
        displaySection("choose_card", "block");
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
}

range();

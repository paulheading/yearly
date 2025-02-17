import loadPage from "~scripts/loaders/loadPage";
import loadComplete from "~scripts/loaders/loadComplete";
import setStore from "~scripts/store/setStore";
import user from "~data/user";

import { printFirstName, printSourcePlaylists } from "~scripts/printers";
import { displaySection, usingLiveData } from "~scripts/helpers";
import { getPlaylists } from "~scripts/getters";

import {
  listenSelectList,
  listenRangeInput,
  listenToggleInput,
  listenCustomButton,
  listenInfoButton,
  listenBuildButton,
  listenSelectButton,
} from "~scripts/listeners";

import {
  setToggleInput,
  setRangeInput,
  setSelectList,
  setAccessToken,
  setUser,
} from "~scripts/setters";

loadPage(function () {
  if (usingLiveData) {
    setAccessToken().then(setUser).then(getPlaylists);
  } else {
    setStore(function (store) {
      store.user = user;
      return store;
    });
  }
})
  .then(function () {
    printFirstName();
    printSourcePlaylists();
    listenToggleInput(setToggleInput);
    listenRangeInput(setRangeInput);
    listenSelectList(setSelectList);
    listenInfoButton();
    listenSelectButton();
    listenCustomButton();
    listenBuildButton();
  })
  .then(function () {
    loadComplete(function () {
      displaySection("choose_card", "block");
    });
  });

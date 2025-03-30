import user from "~data/user";

import getAccessToken from "~scripts/getters/getAccessToken";
import getPlaylists from "~scripts/getters/getPlaylists";
import getStoreState from "~scripts/getters/getStoreState";
import loadComplete from "~scripts/loaders/loadComplete";
import setDOMToStoreValues from "~scripts/setters/setDOMToStoreValues";
import setStore from "~scripts/setters/setStore";
import displaySection from "~scripts/display/displaySection";
import asyncWrap from "~scripts/helpers/asyncWrap";
import setAccessToken from "~scripts/setters/setAccessToken";
import setUser from "~scripts/setters/setUser";
import getStore from "~scripts/getters/getStore";
import createBuildDOM from "~scripts/creators/createBuildDOM";
import usingLiveData from "~scripts/using/usingLiveData";

function getParams() {
  if (getStore().params) window.location.assign("/save");
}

function loadChooseCard() {
  loadComplete(function () {
    displaySection("choose_card", "block");
  });
}

function displayPage() {
  asyncWrap(getParams).then(createBuildDOM).then(loadChooseCard);
}

asyncWrap(getStoreState).then(function () {
  if (usingLiveData) {
    if (!getAccessToken()) {
      console.warn("creating new token");
      setAccessToken().then(setUser).then(getPlaylists).then(displayPage);
    } else {
      console.warn("using existing token");
      asyncWrap(displayPage).then(setDOMToStoreValues);
    }
  } else {
    asyncWrap(() =>
      setStore(function (store) {
        store.user = user;
        return store;
      })
    ).then(displayPage);
  }
});

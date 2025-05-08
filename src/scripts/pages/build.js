import user from "#data/user";

import getAccessToken from "#getters/getAccessToken";
import getPlaylists from "#getters/spotify/getPlaylists";
import getStoreState from "#getters/getStoreState";
import loadComplete from "#loaders/loadComplete";
import setDOMToStoreValues from "#setters/setDOMToStoreValues";
import setStore from "#setters/setStore";
import displaySection from "#display/displaySection";
import asyncWrap from "#helpers/asyncWrap";
import setAccessToken from "#setters/setAccessToken";
import setUser from "#setters/setUser";
import getStore from "#getters/getStore";
import createBuildDOM from "#creators/createBuildDOM";
import usingLiveData from "#using/usingLiveData";
import data from "#selectors/data";

function getParams() {
  if (getStore().params) window.location.assign("/save");
}

function loadChooseCard() {
  loadComplete(function () {
    displaySection(data.section.choose_card, "block");
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

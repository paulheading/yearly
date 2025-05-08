import getAuth from "#getters/spotify/getAuth";
import getStore from "#getters/getStore";
import createStore from "#creators/createStore";
import asyncWrap from "#helpers/asyncWrap";
import setParams from "#setters/setParams";
import usingLiveData from "#using/usingLiveData";

export default function () {
  asyncWrap(function () {
    if (!getStore()) createStore();
  })
    .then(setParams)
    .then(function () {
      usingLiveData ? getAuth() : window.location.assign("/build");
    });
}

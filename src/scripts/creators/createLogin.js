import getAuth from "~scripts/getters/spotify/getAuth";
import getStore from "~scripts/getters/getStore";
import createStore from "~scripts/creators/createStore";
import asyncWrap from "~scripts/helpers/asyncWrap";
import setParams from "~scripts/setters/setParams";
import usingLiveData from "~scripts/using/usingLiveData";

export default function () {
  asyncWrap(function () {
    if (!getStore()) createStore();
  })
    .then(setParams)
    .then(function () {
      usingLiveData ? getAuth() : window.location.assign("/build");
    });
}

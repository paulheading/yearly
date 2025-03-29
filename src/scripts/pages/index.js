import $ from "~scripts/selectors";

import { getAuth } from "~scripts/getters";
import getStore from "~scripts/getters/getStore";
import getAccessToken from "~scripts/getters/getAccessToken";

import displaySection from "~scripts/helpers/displaySection";
import isDataLive from "~scripts/helpers/is/dataLive";

import createStore from "~scripts/creators/createStore";

import listenSearchParams from "~scripts/listeners/listenSearchParams";

import printInvalidKeys from "~scripts/printers/printInvalidKeys";
import setStore from "~scripts/setters/setStore";

function doLogin() {
  (async function () {
    if (!getStore()) createStore();
  })().then(function () {
    if (params.valid.length) {
      // notify store of params mode
      setStore(function (store) {
        store.params = true;
        return store;
      });
    }
  });

  isDataLive ? getAuth() : window.location.assign("/build");
}

if (!isDataLive) {
  displaySection("banner", "block");
  $.print.banner.innerHTML += `<em>OFFLINE MODE</em>`;
}

// listen for params on load

let params = listenSearchParams();

if (params.empty) {
  console.log("no params");
} else {
  if (params.valid.length) {
    if (getAccessToken()) {
      // if valid AND logged in. go to build page

      window.location.assign("/build");
    } else {
      // if valid AND logged out. show alert prompting log in
      displaySection("banner", "block");

      let $button = document.createElement("button");

      $button.innerText = "Log in";

      $button.addEventListener("click", doLogin);

      $.print.banner.innerHTML += `Options saved! You need to `;

      $.print.banner.append($button);
    }
  } else {
    // if not valid. show confirm alert

    if (params.invalid.length) {
      displaySection("banner", "block");
      printInvalidKeys(params.invalid);
    }
  }
}

$.button.login.addEventListener("click", doLogin);

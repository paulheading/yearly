import {
  displaySection,
  loadingComplete,
  byPlaylistOwner,
  toStoreSources,
} from "~scripts/helpers";
import buildSelectMenus from "~scripts/components/select";
import {
  setAccessToken,
  setUser,
  getPlaylists,
  usingLiveData,
  getData,
} from "~scripts/services";
import customButtonListener from "~scripts/components/buttons/custom";
import infoButtonListener from "~scripts/components/buttons/info";
import selectButtonListener from "~scripts/components/buttons/select";
import buildButtonListener from "~scripts/components/buttons/build";
import backButtonListener from "~scripts/components/buttons/back";
import saveButtonListener from "~scripts/components/buttons/save";

import store from "~data/store";
import user from "~data/user";
import playlists from "~data/playlists";
import $ from "~scripts/selectors";

import range from "~scripts/components/card/settings/range";
import printSourcePlaylists from "~scripts/services/printSourcePlaylists";

function loadChooseCard() {
  function showElements() {
    displaySection("choose_card", "block");
  }
  loadingComplete(showElements);
}

function createDOMListeners() {
  // buildSelectMenus();
  // infoButtonListener();
  // selectButtonListener();
  // customButtonListener();
  // buildButtonListener();
  // backButtonListener();
  // saveButtonListener();
}

if (usingLiveData) {
  setAccessToken()
    .then(setUser)
    .then(getPlaylists)
    // .then(printSourcePlaylists)
    // .then(async function (data) {
    //   let new_results = await Promise.all(
    //     data.map(async function (id) {
    //       let playlist = await getData(`playlists/${id}`);
    //       return playlist;
    //     })
    //   );
    //   console.log("new results: ", new_results);
    // })
    .then(createDOMListeners)
    .then(loadChooseCard);
}

if (!usingLiveData) {
  async function setUser() {
    store.user = user;
    $.print.firstname.innerText = store.user.first_name;
  }

  let setSources = () => (store.sources = playlists);

  setUser()
    .then(setSources)
    .then(printSourcePlaylists)
    .then(createDOMListeners)
    .then(loadChooseCard);
}

range();

import getStore from "~scripts/getters/getStore";
import $ from "~scripts/selectors";
import resetCustomConfig from "~scripts/setters/resetCustomConfig";
import setStore from "~scripts/setters/setStore";
import usingCustomStyle from "~scripts/using/usingCustomStyle";
import getPlaylistSources from "~scripts/getters/getPlaylistSources";

function buildButtonClick() {
  if (!usingCustomStyle()) resetCustomConfig();

  let sources = getPlaylistSources();

  setStore(function (store) {
    store.playlist.sources = sources;
    return store;
  });

  console.log(getStore());

  // window.location.assign("/save");
}

export default function () {
  $.button.build.addEventListener("click", buildButtonClick);
}

import $ from "#selectors";
import resetCustomConfig from "#setters/resetCustomConfig";
import setStore from "#setters/setStore";
import usingCustomStyle from "#using/usingCustomStyle";
import getPlaylistSources from "#getters/getPlaylistSources";
import settings from "#data/settings";
import attrs from "#selectors/attrs";
import setCardSetting from "#setters/setCardSetting";
import asyncWrap from "#helpers/asyncWrap";

function setStoreFormValues() {
  $.setting.selects.forEach(function ($form) {
    let { $button, data } = $.selectForm.selectors($form);

    let { card, snake } = data;

    let setting = settings[snake];

    let value = $button.getAttribute(attrs.data.id);

    if (snake == "choose_source") return;

    setCardSetting({ card, setting, value });
  });
}

function buildButtonClick() {
  if (!usingCustomStyle()) resetCustomConfig();

  asyncWrap(setStoreFormValues)
    .then(function () {
      let sources = getPlaylistSources();

      setStore(function (store) {
        store.playlist.sources = sources;
        return store;
      });
    })
    .then(function () {
      window.location.assign("/save");
    });
}

export default function () {
  $.button.build.addEventListener("click", buildButtonClick);
}

import asyncWrap from "~scripts/helpers/asyncWrap";
import loadComplete from "~scripts/loaders/loadComplete";
import displayBanner from "~scripts/display/displayBanner";
import displaySection from "~scripts/display/displaySection";
import getStore from "~scripts/getters/getStore";
import setStore from "~scripts/setters/setStore";
import createSaveDOM from "~scripts/creators/createSaveDOM";

export default function () {
  asyncWrap(createSaveDOM).then(function () {
    loadComplete(function () {
      displaySection("save_playlist", "block");
      displaySection("confirm_settings", "block");

      let { params } = getStore();

      if (!params) return;

      displayBanner.innerHTML("Created using params!");

      setStore(function (store) {
        store.params = false;
        return store;
      });
    });
  });
}

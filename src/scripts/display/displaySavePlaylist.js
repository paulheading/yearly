import loadComplete from "#loaders/loadComplete";
import displayBanner from "#display/displayBanner";
import displaySection from "#display/displaySection";
import getStore from "#getters/getStore";
import setStore from "#setters/setStore";
import data from "#selectors/data";

export default function () {
  loadComplete(function () {
    displaySection(data.section.save_playlist, "block");
    displaySection(data.section.confirm_settings, "block");

    let { params } = getStore();

    if (!params) return;

    displayBanner.innerHTML("Created using params!");

    setStore(function (store) {
      store.params = false;
      return store;
    });
  });
}

import $ from "~scripts/selectors";
import { setStore } from "~scripts/setters";
import settings from "~data/settings";

export default function (value) {
  let setValue = function () {
    if (value) return Number(value);

    let { data } = $.formSelectors($.select_year_released());

    return Number(data);
  };

  let params = {
    card: "custom",
    setting: settings.year_released,
    value: setValue(),
  };

  setStore.cardSetting(params);
}

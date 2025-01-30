import $ from "~scripts/selectors";
import { setStore } from "~scripts/setters";
import settings from "~data/settings";

export default function (value) {
  return;

  let setValue = function () {
    if (value) return Number(value);

    let { data } = $.selectList.selectors($.select_year_released());

    return Number(data.id);
  };

  let params = {
    card: "custom",
    setting: settings.year_released,
    value: setValue(),
  };

  setStore.cardSetting(params);
}

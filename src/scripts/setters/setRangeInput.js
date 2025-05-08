import settings from "#data/settings";
import setCardSetting from "#setters/setCardSetting";

export default function ({ card, value, name }) {
  let setting = settings[name];

  let params = {
    card,
    setting,
    value,
  };

  setCardSetting(params);
}

import settings from "#data/settings";
import resetSelectFormDOM from "#setters/resetSelectFormDOM";
import setCardSetting from "#setters/setCardSetting";

export default function ({ card, form }) {
  let { value, snake } = form;

  resetSelectFormDOM(snake);

  setCardSetting({ card, setting: settings[snake], value });
}

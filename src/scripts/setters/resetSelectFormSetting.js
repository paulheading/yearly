import settings from "~data/settings";
import resetSelectFormDOM from "~scripts/setters/resetSelectFormDOM";
import setCardSetting from "~scripts/setters/setCardSetting";

export default function ({ card, form }) {
  let { value, snake } = form;

  resetSelectFormDOM(snake);

  setCardSetting({ card, setting: settings[snake], value });
}

import include from "~scripts/filters/include";
import getStore from "~scripts/getters/getStore";

export default function (callback) {
  let card = getStore().cards.filter(include.idCustom)[0];
  return card.content[0].settings.forEach((setting) => callback(setting));
}

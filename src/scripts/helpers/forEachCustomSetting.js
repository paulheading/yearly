import { inCustomId } from "~scripts/filters";
import { getStore } from "~scripts/getters";

export default function (callback) {
  let card = getStore().cards.filter(inCustomId)[0];
  return card.content[0].settings.forEach((setting) => callback(setting));
}

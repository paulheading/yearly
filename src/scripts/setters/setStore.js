import store from "~data/store";
import settings from "~data/settings";

function cardSetting({ card, setting, value }) {
  store.cards
    .filter(({ id }) => id == card)[0]
    .content.filter(({ type }) => type == "config")[0]
    .settings.filter(({ title }) => title == setting)[0].value = value;
}

function selectList({ card, data, select }) {
  if (!card) return;

  console.log("setting card-based select list");

  let params = {
    card,
    setting: settings[select],
    value: Number(data),
  };

  cardSetting(params);
}

function rangeInput(params) {
  console.log("setting card-based range input", params);

  console.log("these are the store params: ", params.$output.innerText);
}

export default {
  cardSetting,
  selectList,
  rangeInput,
};

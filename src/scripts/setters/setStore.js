import store from "~data/store";
import settings from "~data/settings";

function cardSetting({ card, setting, value }) {
  store.cards
    .filter(({ id }) => id == card)[0]
    .content.filter(({ type }) => type == "config")[0]
    .settings.filter(({ title }) => title == setting)[0].value = value;
}

function selectList({ card, value, name }) {
  if (!card) return;

  let setting = settings[name];

  let params = {
    card,
    setting,
    value,
  };

  console.log("select params: ", params);

  cardSetting(params);
}

function rangeInput({ card, value, name }) {
  if (!card) return;

  let setting = settings[name];

  let params = {
    card,
    setting,
    value,
  };

  console.log("range params: ", params);

  cardSetting(params);
}

function toggleInput({ card, value, name }) {
  let setting = settings[name];

  let params = {
    card,
    setting,
    value,
  };

  console.log("toggle params: ", params);

  cardSetting(params);
}

export default {
  cardSetting,
  selectList,
  rangeInput,
  toggleInput,
};

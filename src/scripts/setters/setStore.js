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

  cardSetting(params);
}

function toggleInput({ card, value, name }) {
  let setting = settings[name];

  let params = {
    card,
    setting,
    value,
  };

  cardSetting(params);
}

export default {
  cardSetting,
  selectList,
  rangeInput,
  toggleInput,
};

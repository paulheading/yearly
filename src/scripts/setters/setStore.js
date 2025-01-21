import store from "~data/store";

let cardSetting = function ({ card, setting, value }) {
  store.cards
    .filter(({ id }) => id == card)[0]
    .content.filter(({ type }) => type == "config")[0]
    .settings.filter(({ title }) => title == setting)[0].value = value;
};

export default {
  cardSetting,
};

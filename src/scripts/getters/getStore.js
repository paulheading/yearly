import store from "~data/store";

let card = {};

card.byId = function (value) {
  return store.cards.filter(({ id }) => id == value)[0];
};

card.contentByType = function (card, value) {
  return card.content.filter(({ type }) => type == value)[0];
};

card.badjo = card.byId("badjo");
card.cindy = card.byId("cindy");
card.custom = card.byId("custom");

export default function () {
  return {
    ...store,
    query: {
      card,
    },
  };
}

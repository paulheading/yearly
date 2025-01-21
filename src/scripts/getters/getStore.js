import store from "~data/store";

function byId(value) {
  return store.cards.filter(({ id }) => id == value)[0];
}

function contentByType(card, value) {
  return card.content.filter(({ type }) => type == value)[0];
}

export default function () {
  return {
    ...store,
    _card: {
      badjo: byId("badjo"),
      cindy: byId("cindy"),
      custom: byId("custom"),
      byId,
      contentByType,
    },
  };
}

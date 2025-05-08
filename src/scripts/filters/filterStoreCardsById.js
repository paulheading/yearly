import store from "#data/store";

export default function (value) {
  return store.cards.filter(({ id }) => id == value)[0];
}

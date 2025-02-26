import setStore from "~scripts/setters/setStore";

export default function ({ card, setting, value }) {
  setStore(function (store) {
    store.cards
      .filter(({ id }) => id == card)[0]
      .content.filter(({ type }) => type == "config")[0]
      .settings.filter(({ title }) => title == setting)[0].value = value;

    return store;
  });
}

import store from "~data/store";

export default function () {
  return {
    selected: {
      year: store.selected.year,
    },
  };
}

import getStore from "~scripts/store/getStore";

export default function (value) {
  let { cards, playlist } = getStore();

  function match() {
    if (value) return value;
    else if (playlist.style) return playlist.style;
    else return "custom";
  }

  cards = cards.filter(({ id }) => id == match());

  return cards[0];
}

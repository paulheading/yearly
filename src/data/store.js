import cindy from "~data/store/playlists/cindy";
import badjo from "~data/store/playlists/badjo";
import custom from "~data/store/playlists/custom";

let store = {
  access_token: "",
  selected: {
    source: 0,
    track: null,
    year: {
      added: 2025,
      released: 2025,
    },
  },
  create: {
    playlist: {
      name: "",
      description: "",
      image: "",
      style: "",
      tracks: [],
      excess: [],
    },
  },
  user: {
    id: null,
    playlists: [],
  },
  cards: [cindy, badjo, custom],
  query: {
    card: {
      byId: function (value) {
        return store.cards.filter(({ id }) => id == value)[0];
      },
      contentByType: function (card, value) {
        return card.content.filter(({ type }) => type == value)[0];
      },
    },
  },
};

export default store;

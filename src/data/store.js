import cindy from "#data/store/cards/cindy";
import badjo from "#data/store/cards/badjo";
import custom from "#data/store/cards/custom";
import playlist from "#data/store/playlist";
import user from "#data/store/user";

let store = {
  access: {
    token: null,
    expiry: "",
  },
  cards: [cindy, badjo, custom],
  tracks: [],
  params: false,
  playlist,
  user,
};

export default store;

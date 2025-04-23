import cindy from "~data/store/cards/cindy";
import badjo from "~data/store/cards/badjo";
import custom from "~data/store/cards/custom";
import color from "~data/store/color";
import playlist from "~data/store/playlist";
import user from "~data/store/user";

let store = {
  access: {
    token: null,
    expiry: "",
  },
  cards: [cindy, badjo, custom],
  color,
  tracks: [],
  params: false,
  playlist,
  user,
};

export default store;

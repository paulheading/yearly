import cindy from "~data/store/playlists/cindy";
import badjo from "~data/store/playlists/badjo";
import custom from "~data/store/playlists/custom";

let store = {
  access_token: "",
  get_tracks: {
    keep_going: true,
    results: [],
    offset: 0,
    limit: 20,
  },
  playlist: {
    source: 0,
    name: "",
    description: "",
    image: "",
    style: "",
    tracks: [],
    excess: [],
  },
  user: {
    id: null,
    playlists: [],
  },
  cards: [cindy, badjo, custom],
};

export default store;

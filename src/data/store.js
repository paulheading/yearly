import cindy from "~data/store/playlists/cindy";
import badjo from "~data/store/playlists/badjo";
import custom from "~data/store/playlists/custom";

export default {
  selected: {
    playlist: 0,
    track: null,
    year: "2023",
  },
  create: {
    playlist: {
      name: "",
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
};

import { getStore, getSource } from "~scripts/getters";

let playlistStyleCustom = () => getStore().create.playlist.style == "custom";

let sourceLikedSongs = () => getSource() == 0;

export default {
  playlistStyleCustom,
  sourceLikedSongs,
};

import { getSource } from "~scripts/getters";
import getStore from "~scripts/store/getStore";

let playlistStyleCustom = () => getStore().create.playlist.style == "custom";

let sourceLikedSongs = () => getSource() == 0;

export default {
  playlistStyleCustom,
  sourceLikedSongs,
};

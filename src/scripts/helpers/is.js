import getStore from "~scripts/store/getStore";
import getSource from "~scripts/getters/getSource";

let playlistStyleCustom = () => getStore().create.playlist.style == "custom";

let sourceLikedSongs = () => getSource() == 0;

export default {
  playlistStyleCustom,
  sourceLikedSongs,
};

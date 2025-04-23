import setStore from "~scripts/setters/setStore";
import createPlaylist from "~scripts/creators/createPlaylist";

export default function (tracks) {
  setStore(function (store) {
    let { name, description } = createPlaylist;

    store.playlist.name = name;
    store.playlist.description = description;
    store.playlist.tracks = tracks;

    return store;
  });
}

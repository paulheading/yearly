import setStore from "#setters/setStore";
import createPlaylist from "#creators/createPlaylist";

export default function (tracks) {
  setStore(function (store) {
    let { name, description } = createPlaylist;

    store.playlist.name = name;
    store.playlist.description = description;
    store.playlist.tracks = tracks;

    return store;
  });
}

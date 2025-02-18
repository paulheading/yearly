import getStore from "~scripts/store/getStore";
import postData from "~scripts/posters/postData";

export default function (playlist) {
  let path = "playlists/" + playlist.id + "/tracks";
  let uris = getStore().create.playlist.tracks.map(({ track }) => track.uri);

  return postData(path, { uris });
}

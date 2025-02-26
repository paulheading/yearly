import getStore from "~scripts/getters/getStore";
import postData from "~scripts/posters/postData";

export default function (playlist) {
  let endpoint = "playlists/" + playlist.id + "/tracks";
  let uris = getStore().playlist.tracks.map(({ track }) => track.uri);

  return postData({ endpoint, body: { uris } });
}

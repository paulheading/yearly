import getStore from "#getters/getStore";
import postData from "#posters/postData";

export default function (playlist) {
  let endpoint = "playlists/" + playlist.id + "/tracks";
  let uris = getStore().playlist.tracks.map(({ track }) => track.uri);

  return postData({ endpoint, body: { uris } });
}

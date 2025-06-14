import getStore from "#getters/getStore";
import getLikedTracks from "#getters/spotify/getLikedTracks";
import getPlaylistTracks from "./getPlaylistTracks";
import setUniqueTrack from "#setters/setUniqueTrack";

let results = [];

export default async function () {
  let { sources } = getStore().playlist;

  for await (let source of sources) {
    let { id } = source;

    let usingLikedSongs = id == 0;

    if (usingLikedSongs) {
      let tracks = await getLikedTracks();

      tracks.forEach(function (track) {
        results = setUniqueTrack(results, track);
      });
    } else {
      let tracks = await getPlaylistTracks(id);

      tracks.forEach(function (track) {
        results = setUniqueTrack(results, track);
      });
    }
  }

  return results;
}

import getPlaylistItems from "#getters/spotify/getPlaylistItems";
import setTracksAdded from "#setters/setTracksAdded";
import getYearAdded from "#getters/getYearAdded";

export default async function (id) {
  let year_added = getYearAdded();

  if (!id) {
    console.warn("no id playlist provided");
    return;
  }

  let { items } = await getPlaylistItems(id);

  return setTracksAdded({ items, year_added });
}

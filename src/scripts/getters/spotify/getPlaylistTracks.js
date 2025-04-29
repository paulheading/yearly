import getPlaylistItems from "~scripts/getters/spotify/getPlaylistItems";
import setTracksAdded from "~scripts/setters/setTracksAdded";
import getYearAdded from "~scripts/getters/getYearAdded";

let year_added = getYearAdded();

export default async function (id) {
  if (!id) {
    console.warn("no id playlist provided");
    return;
  }

  let { items } = await getPlaylistItems(id);

  return setTracksAdded({ items, year_added });
}

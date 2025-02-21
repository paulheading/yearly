import { displaySection, is } from "~scripts/helpers";
import {
  getPlaylistItems,
  getUsersSavedTracks,
  getSource,
  getYearAdded,
} from "~scripts/getters";
import { setTracksAdded } from "~scripts/setters";
import setStore from "~scripts/store/setStore";
import getStore from "~scripts/store/getStore";

export default async function () {
  displaySection("tracks_added", "block");

  let year_added = getYearAdded();

  if (!is.sourceLikedSongs()) {
    let { items } = await getPlaylistItems(getSource());

    setTracksAdded({ items, year_added });
  } else {
    while (getStore().get_tracks.keep_going) {
      let { offset } = getStore().get_tracks;
      let { items } = await getUsersSavedTracks(offset);

      function callback() {
        setStore(function (store) {
          store.get_tracks.keep_going = false;
          return store;
        });
      }

      let params = { items, callback, year_added };

      setTracksAdded(params);

      setStore(function (store) {
        store.get_tracks.offset += store.get_tracks.limit;
        return store;
      });
    }
  }

  return getStore().get_tracks.results;
}

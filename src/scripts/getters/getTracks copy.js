import getPlaylistItems from "~scripts/getters/getPlaylistItems";
import getUsersSavedTracks from "~scripts/getters/getUsersSavedTracks";
import getSource from "~scripts/getters/getSource";
import getYearAdded from "~scripts/getters/getYearAdded";
import getStore from "~scripts/getters/getStore";
import setTracksAdded from "~scripts/setters/setTracksAdded";
import setStore from "~scripts/setters/setStore";
import usingLikedSongs from "~scripts/using/usingLikedSongs";
import displaySection from "~scripts/display/displaySection";
import data from "~scripts/selectors/data";

export default async function () {
  displaySection(data.section.tracks_added, "block");

  let year_added = getYearAdded();

  if (!usingLikedSongs()) {
    let { items } = await getPlaylistItems(getSource());

    console.log("items: ", items);

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

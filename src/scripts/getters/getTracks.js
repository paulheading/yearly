import delay from "~scripts/helpers/delay";
import data from "~scripts/selectors/data";
import liked from "~data/tracks/liked";

import getPlaylistItems from "~scripts/getters/getPlaylistItems";
import getUsersSavedTracks from "~scripts/getters/getUsersSavedTracks";
// import getSource from "~scripts/getters/getSource";
import getYearAdded from "~scripts/getters/getYearAdded";
import getStore from "~scripts/getters/getStore";
import setTracksAdded from "~scripts/setters/setTracksAdded";
import setStore from "~scripts/setters/setStore";
import displaySection from "~scripts/display/displaySection";

import usingLiveData from "~scripts/using/usingLiveData";

let year_added = getYearAdded();

async function getLikedSongs() {
  await delay(3000);

  while (getStore().get_tracks.keep_going) {
    let { offset } = getStore().get_tracks;
    let { items } = await getUsersSavedTracks(offset);

    function callback() {
      setStore(function (store) {
        store.get_tracks.keep_going = false;
        return store;
      });
    }

    setTracksAdded({ items, callback, year_added });

    setStore(function (store) {
      store.get_tracks.offset += store.get_tracks.limit;
      return store;
    });
  }
}

async function getPLaylistSongs(id) {
  if (!id) {
    console.warn("no id playlist provided");
    return;
  }

  await delay(5000);

  let { items } = await getPlaylistItems(id);

  setTracksAdded({ items, year_added });
}

function getLocalSongs() {
  let params = {
    items: liked,
    year_added: 2024,
  };

  setTracksAdded(params);
}

async function getRemoteSongs() {
  let { sources } = getStore().playlist;

  for await (let source of sources) {
    let { id } = source;

    let usingLikedSongs = id == 0;

    usingLikedSongs ? await getLikedSongs() : await getPLaylistSongs(id);

    console.log("store: ", getStore());
  }
}

export default async function () {
  displaySection(data.section.tracks_added, "block");

  return !usingLiveData
    ? getLocalSongs()
    : getRemoteSongs().then(() => console.log("ready to move"));
}

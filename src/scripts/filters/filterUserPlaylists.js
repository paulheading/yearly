import getStore from "~scripts/store/getStore";

export default function ({ items }) {
  let foundPlaylist = false;
  let index = 0;
  let playlist = {};

  while (!foundPlaylist) {
    let item = items[index];
    let store = getStore().playlist;
    let itemMatchesStore = item.name == store.name;

    if (itemMatchesStore) {
      playlist = item;
      foundPlaylist = true;
    } else {
      index++;
    }
  }

  return playlist;
}

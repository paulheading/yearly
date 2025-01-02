import get from "~scripts/getters";
import store from "~data/store";

import { byName } from "~scripts/sorters";
import { byPlaylistOwner } from "~scripts/filters";

async function getPlaylists(offset, limit) {
  let playlists = await get.data(
    `me/playlists?offset=${offset}&limit=${limit}`
  );

  return playlists;
}

export default async function () {
  let morePlaylists = true;
  let setTotal = true;

  let remaining = 0;
  let limit = 50;
  let offset = 0;

  let results = [];

  while (morePlaylists) {
    let { total, items } = await getPlaylists(offset, limit);

    items = items.filter(byPlaylistOwner);

    items.forEach(function (item) {
      let pushToResults = true;

      results.forEach(function (result) {
        if (result.id == item.id) pushToResults = false;
      });

      if (pushToResults) results.push(item);
    });

    if (setTotal) {
      remaining = total;
      setTotal = false;
    }

    remaining -= limit;

    if (remaining <= 0) morePlaylists = false;

    if (remaining <= limit) limit = remaining;

    if (remaining >= limit) offset += limit;
  }

  results = results.sort(byName);

  store.user.playlists = results;
}

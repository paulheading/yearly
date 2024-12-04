import { getData } from "~scripts/services";
import {
  byAlbumReleaseDate,
  getYear,
  getYearFromString,
} from "~scripts/helpers";

let thisYearsTracks = true;
let offset = 0;
let limit = 20;
let results = [];

export default async function (callback) {
  while (thisYearsTracks) {
    let { items } = await getData(`me/tracks?offset=${offset}`);

    let checkDateAdded = function (track) {
      if (getYearFromString(track.added_at) < getYear()) {
        thisYearsTracks = false;
      }
    };

    results = [
      ...results,
      ...items.filter((item) => byAlbumReleaseDate(item, checkDateAdded)),
    ];

    offset += limit;
  }

  callback(results);
}

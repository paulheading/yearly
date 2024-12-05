import { getData } from "~scripts/services";
import {
  addedThisYear,
  releasedThisYear,
  byLowestPopularity,
} from "~scripts/helpers";

let keepGoing = true;
let offset = 0;
let limit = 20;
let results = [];

export default async function (callback) {
  while (keepGoing) {
    let { items } = await getData(`me/tracks?offset=${offset}`);

    items.forEach(function (item) {
      if (!addedThisYear(item)) {
        keepGoing = false;
        return;
      }

      // if (!releasedThisYear(item)) return;

      results.push(item);
    });

    offset += limit;
  }

  results = results.sort(byLowestPopularity);

  callback(results);
}

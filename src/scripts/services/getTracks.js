import { getData } from "~scripts/services";
import { addedThisYear, displaySection } from "~scripts/helpers";
import $ from "~scripts/selectors";

let keepGoing = true;
let offset = 0;
let limit = 20;
let results = [];
let total = 0;

let printTracksAdded = (total) => ($.print.tracks_added.innerText = total);

export default async function (callback) {
  while (keepGoing) {
    let { items } = await getData(`me/tracks?offset=${offset}`);

    displaySection("tracks_added", "block");

    items.forEach(function (item) {
      if (!addedThisYear(item)) {
        keepGoing = false;
        return;
      }

      printTracksAdded(total++);

      results.push(item);
    });

    offset += limit;
  }

  callback(results);
}

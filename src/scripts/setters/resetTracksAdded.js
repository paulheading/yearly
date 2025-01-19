import { printTracksAdded } from "~scripts/printers";
import { tracks } from "~scripts/getters/getTracks";

export default function () {
  printTracksAdded(0);
  tracks.keepGoing = true;
  tracks.offset = 0;
  tracks.results = [];
}

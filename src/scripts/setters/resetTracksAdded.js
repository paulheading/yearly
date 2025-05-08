import printTracksAdded from "#printers/printTracksAdded";
import { loop } from "#getters/getTracks";

export default function () {
  printTracksAdded(0);

  // reset get tracks loop
  console.warn("need to reset loop now", loop);
}

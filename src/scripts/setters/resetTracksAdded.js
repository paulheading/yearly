import printTracksAdded from "~scripts/printers/printTracksAdded";
import { loop } from "~scripts/getters/getTracks";

export default function () {
  printTracksAdded(0);

  // reset get tracks loop
  console.warn("need to reset loop now", loop);
}

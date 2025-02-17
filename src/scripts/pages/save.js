import tracks from "~data/tracks";
import loadPage from "~scripts/loaders/loadPage";
import loadInProgress from "~scripts/loaders/loadInProgress";
import getTracks from "~scripts/getters/getTracks";
import filterResults from "~scripts/filters/filterResults";

import { usingLiveData, displaySection } from "~scripts/helpers";
import { listenBackButton, listenSaveButton } from "~scripts/listeners";
import { printYearAdded, printLocalTracks } from "~scripts/printers";

loadPage(function () {
  loadInProgress(function () {
    displaySection("tracks_added", "block");
  });
})
  .then(function () {
    printYearAdded();
    listenSaveButton();
    listenBackButton();
  })
  .then(function () {
    if (usingLiveData) {
      getTracks(filterResults);
    } else {
      printLocalTracks(tracks.length);
      filterResults(tracks);
    }
  });

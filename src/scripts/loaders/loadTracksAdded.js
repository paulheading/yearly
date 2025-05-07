import loadInProgress from "~scripts/loaders/loadInProgress";
import displaySection from "~scripts/display/displaySection";
import printYearAdded from "~scripts/printers/printYearAdded";
import data from "~scripts/selectors/data";

export default function () {
  loadInProgress(function () {
    displaySection(data.section.tracks_added, "block");
    printYearAdded();
  });
}

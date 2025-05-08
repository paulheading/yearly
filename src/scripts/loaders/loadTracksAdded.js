import loadInProgress from "#loaders/loadInProgress";
import displaySection from "#display/displaySection";
import printYearAdded from "#printers/printYearAdded";
import data from "#selectors/data";

export default function () {
  loadInProgress(function () {
    displaySection(data.section.tracks_added, "block");
    printYearAdded();
  });
}

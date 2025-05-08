import loadComplete from "#loaders/loadComplete";
import displaySection from "#display/displaySection";
import data from "#selectors/data";

export default function () {
  loadComplete(function () {
    displaySection(data.section.empty_playlist, "block");
  });
}
